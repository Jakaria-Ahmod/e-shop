import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  ThumbsUp,
  MessageCircle,
} from 'lucide-react';
import CommonButton from '../../../globalComponents/comonButton';

export default function Comments() {
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [SliceComments, setCommentsSlice] = useState(3);
  const [comments, setComments] = useState([
    {
      name: 'Angelo Powers',
      date: '2 months ago',
      review:
        "Thanks for this informative article! I'm particularly excited about the potential of 5G connectivity to enable new applications and transform industries. It's amazing to think about the possibilities that this technology could unlock.",
    },
    {
      name: 'Edward Paul',
      date: '3 months ago',
      review:
        "I'm glad you mentioned blockchain as one of the latest tech trends to watch. I believe this technology has the potential to revolutionize many industries, from finance and healthcare to supply chain management and beyond.",
    },
    {
      name: 'Emilia Chen',
      date: '1 month ago',
      review:
        "I appreciate this overview of the latest tech trends. As someone who is interested in emerging technologies, I find it helpful to have a broad understanding of what's happening in the industry.",
    },
  ]);

  const CommentSlice = () => {
    setCommentsSlice(p => p + 3);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newComment = {
      name,
      email,
      review,
      date: 'Just now',
    };

    setComments(prev => [...prev, newComment]);

    setReview('');
    setName('');
    setEmail('');
  };

  return (
    <div className="max-w-5xl mx-auto bg-white my-[80px]">
      {/* Navigation Header */}
      <div className="flex items-center justify-between py-6 border-b border-gray-200">
        <div className="flex items-center gap-3 text-black font-medium text-lg">
          <ArrowLeft className="w-6 h-6" />
          <span>Prev Post</span>
        </div>

        <div className="flex items-center gap-6">
          <Facebook className="w-6 h-6 text-black" />
          <Twitter className="w-6 h-6 text-black" />
          <Instagram className="w-6 h-6 text-black" />
        </div>

        <div className="flex items-center gap-3 text-black font-medium text-lg">
          <span>Next Post</span>
          <ArrowRight className="w-6 h-6" />
        </div>
      </div>

      {/* Comments Section */}
      <div className="py-16">
        <h2 className="text-4xl font-bold text-black mb-12">Comments</h2>

        <div className="space-y-12">
          {comments.slice(0, SliceComments).map((comment, index) => (
            <div className="flex gap-6" key={index}>
              <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-black">
                  {comment.name}
                </h3>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex gap-1">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">
                          ★
                        </span>
                      ))}
                  </div>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500 text-base">
                    {comment.date}
                  </span>
                  <span className="text-gray-400">|</span>
                  <div className="flex gap-3">
                    <ThumbsUp className="w-5 h-5 text-red-500 fill-red-500" />
                    <MessageCircle className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  {comment.review}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Comments Button */}
        <div className="flex justify-center mt-16">
          <button
            className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-md hover:bg-orange-500 hover:text-white transition-colors font-medium"
            onClick={CommentSlice}
          >
            Load More Comments
          </button>
        </div>
      </div>

      {/* Leave A Comment Form */}
      <div className="bg-gray-100 rounded-lg p-[56px] mb-[40px]">
        <h2 className="text-colorFour font-poppins text-[36px] font-semibold leading-[46px]">
          Leave A Comment
        </h2>
        <p className="text-colorFour font-montserrat text-base font-normal leading-[24px] mt-[12px]">
          Your email will not be shown on the comment section. Required fields
          are marked <span className="text-red-500">*</span>
        </p>

        <form className="space-y-8 mt-[40px]" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium text-black mb-3">
              Your Review <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Enter your review message ..."
              className="min-h-[150px] w-full bg-white border outline-0 border-gray-300 text-base p-4 resize-none rounded-md"
              value={review}
              onChange={e => setReview(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-medium text-black mb-3">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Amelia Robert"
                className="w-full bg-white border outline-none border-gray-300 text-base p-4 h-12 rounded-md"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-black mb-3">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="amelia.watson@eshop.com"
                className="w-full bg-white border outline-none border-gray-300 text-base p-4 h-12 rounded-md"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <CommonButton>Submit</CommonButton>
        </form>
      </div>
    </div>
  );
}
