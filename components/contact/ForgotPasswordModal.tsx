'use client';

import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  KeyRound,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
  onPasswordReset: (newPassword: string) => void;
}

export default function ForgotPasswordModal({
  isOpen,
  onClose,
  initialEmail = '',
  onPasswordReset,
}: ForgotPasswordModalProps) {
  const [email, setEmail] = useState(initialEmail);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [step, setStep] = useState<'request' | 'verify' | 'success'>('request');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [demoOtp, setDemoOtp] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(0);

  // Sync initial email when modal opens
  React.useEffect(() => {
    if (initialEmail) setEmail(initialEmail);
  }, [initialEmail]);

  // Countdown timer for OTP resend
  React.useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  if (!isOpen) return null;

  const handleSendOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!email) {
      setError('Please provide an email address.');
      return;
    }

    setLoading(true);
    setError('');
    setDemoOtp(null);

    try {
      const res = await fetch('/api/auth/otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'send', email }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to dispatch OTP.');
      }

      setDemoOtp(data.demoOtp || null);
      setStep('verify');
      setCountdown(60);
    } catch (err: any) {
      setError(err.message || 'Failed to dispatch OTP.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) {
      setError('Please enter the 6-digit OTP code.');
      return;
    }
    if (!newPassword || newPassword.length < 4) {
      setError('New password must be at least 4 characters.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'verify', email, otp, newPassword }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to verify OTP.');
      }

      setStep('success');
      onPasswordReset(newPassword);

      setTimeout(() => {
        onClose();
        setStep('request');
        setOtp('');
        setNewPassword('');
        setDemoOtp(null);
      }, 1800);
    } catch (err: any) {
      setError(err.message || 'Verification failed. Please check your OTP.');
    } finally {
      setLoading(false);
    }
  };

  const autofillDemoOtp = () => {
    if (demoOtp) {
      setOtp(demoOtp);
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-[#0c0809] border-2 border-[#e51b24]/60 shadow-[0_0_50px_rgba(229,27,36,0.3)] p-6 sm:p-8 text-left overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#261818] mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#1f1012] border border-[#e51b24]/40 flex items-center justify-center text-[#e51b24]">
              <KeyRound size={16} />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#e51b24] font-bold tracking-widest uppercase block">
                SECURITY VERIFICATION
              </span>
              <h3 className="font-['Oswald','Bebas_Neue',sans-serif] text-xl font-bold text-white tracking-wide uppercase">
                RESET ACCESS KEY
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#140c0d] border border-[#261818] text-zinc-400 hover:text-white hover:border-[#e51b24]/50 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded bg-[#2a0f12] border border-red-500/50 flex items-center gap-2 text-xs font-mono text-red-200">
            <AlertCircle size={15} className="text-red-400 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* STEP 1: REQUEST OTP */}
        {step === 'request' && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <p className="text-xs font-mono text-zinc-300 leading-relaxed">
              Enter your inquiry email address. We will generate and transmit an automatic 6-digit security OTP code.
            </p>

            <div>
              <label className="font-mono text-xs text-white uppercase tracking-wider block mb-1.5 font-bold">
                VERIFIED EMAIL ADDRESS
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#140c0d] border border-[#261818] focus:border-[#e51b24] text-xs font-mono text-white px-4 py-3 rounded outline-none transition-colors pr-10"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
                  <Mail size={16} />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rdr-btn-primary justify-center cursor-pointer mt-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>DISPATCHING OTP...</span>
                </>
              ) : (
                <>
                  <span>DISPATCH AUTOMATIC OTP</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        )}

        {/* STEP 2: VERIFY OTP & NEW PASSWORD */}
        {step === 'verify' && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            {/* Automatic OTP Alert Box */}
            {demoOtp && (
              <div className="p-3.5 rounded-xl bg-[#140c0d] border border-[#e51b24]/60 flex items-center justify-between gap-3 shadow-inner">
                <div>
                  <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-[#e51b24] uppercase tracking-wider">
                    <Sparkles size={12} />
                    <span>AUTOMATIC OTP GENERATED</span>
                  </div>
                  <div className="font-mono text-lg font-black tracking-[4px] text-white mt-0.5">
                    {demoOtp}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={autofillDemoOtp}
                  className="px-2.5 py-1 rounded bg-[#e51b24] hover:bg-[#ff2a34] text-white font-mono text-[11px] font-bold tracking-wider cursor-pointer transition-colors shadow"
                >
                  AUTO-FILL
                </button>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="font-mono text-xs text-white uppercase tracking-wider font-bold">
                  6-DIGIT OTP CODE
                </label>
                {countdown > 0 ? (
                  <span className="font-mono text-[11px] text-zinc-500">Resend in {countdown}s</span>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleSendOtp()}
                    className="font-mono text-[11px] text-[#e51b24] hover:underline cursor-pointer"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
              <input
                type="text"
                required
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                placeholder="e.g. 123456"
                className="w-full bg-[#140c0d] border border-[#261818] focus:border-[#e51b24] text-center tracking-[6px] text-lg font-mono font-bold text-[#e51b24] px-4 py-2.5 rounded outline-none transition-colors"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="font-mono text-xs text-white uppercase tracking-wider font-bold">
                  NEW PASSWORD / ACCESS CODE
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[11px] font-mono text-zinc-400 hover:text-[#e51b24] flex items-center gap-1 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={12} /> : <Eye size={12} />}
                  <span>{showPassword ? 'HIDE' : 'SHOW'}</span>
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter at least 4 characters"
                  className="w-full bg-[#140c0d] border border-[#261818] focus:border-[#e51b24] text-xs font-mono text-white px-4 py-3 rounded outline-none transition-colors pr-10"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
                  <Lock size={15} />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rdr-btn-primary justify-center cursor-pointer mt-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>VERIFYING OTP...</span>
                </>
              ) : (
                <>
                  <span>VERIFY OTP & SET PASSWORD</span>
                  <ShieldCheck size={16} />
                </>
              )}
            </button>
          </form>
        )}

        {/* STEP 3: SUCCESS */}
        {step === 'success' && (
          <div className="py-6 text-center space-y-3 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-[#1f1012] border-2 border-[#e51b24] flex items-center justify-center text-[#e51b24] mx-auto shadow-[0_0_25px_rgba(229,27,36,0.5)]">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="font-['Oswald','Bebas_Neue',sans-serif] text-2xl font-bold text-white uppercase tracking-wider">
              PASSWORD RESET COMPLETED
            </h4>
            <p className="text-xs font-mono text-zinc-300">
              Your new password has been verified and automatically applied to the inquiry form!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
