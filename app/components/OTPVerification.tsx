import { FC, useState } from 'react';

interface OTPVerificationProps {
  email: string;
  onVerificationComplete: () => void;
  onResendOTP: () => void;
}

const OTPVerification: FC<OTPVerificationProps> = ({
  email,
  onVerificationComplete,
  onResendOTP,
}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    setError('');

    // Focus next input
    if (element.nextSibling && element.value !== '') {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    
    if (otpValue.length !== 6) {
      setError('Please enter all digits');
      return;
    }

    try {
      // Here you would typically make an API call to verify the OTP
      // For now, we'll just simulate success
      onVerificationComplete();
    } catch (err) {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-center mb-2">Verify Your Email</h2>
      <p className="text-center text-gray-600 mb-6">
        We've sent a code to {email}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center space-x-2">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
              className="w-12 h-12 border rounded-lg text-center text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Verify Email
        </button>

        <div className="text-center">
          <button
            type="button"
            onClick={onResendOTP}
            className="text-blue-600 hover:underline text-sm"
          >
            Didn't receive the code? Resend
          </button>
        </div>
      </form>
    </div>
  );
};

export default OTPVerification; 