import { useState } from 'react';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  company: string;
}

const ReferralModal = ({ isOpen, onClose, jobTitle, company }: ReferralModalProps) => {
  const [message, setMessage] = useState('');
  const [resume, setResume] = useState<File | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement the referral request submission logic
    console.log('Submitting referral request:', { message, resume });
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Request Referral</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="mb-4">
          <h3 className="font-medium text-lg">{jobTitle}</h3>
          <p className="text-gray-600">{company}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Write a message to the referrer...
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Resume
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                id="resume-upload"
                required
              />
              <label
                htmlFor="resume-upload"
                className="cursor-pointer bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Choose file
              </label>
              <span className="text-sm text-gray-500">
                {resume ? resume.name : 'No file chosen'}
              </span>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal; 