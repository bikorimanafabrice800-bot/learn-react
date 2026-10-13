
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import Stories from "../assets/stories.json";

function CardStory() {
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleComment = () => {
    if (comment.trim() === "") return;

    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="flex gap-8 w-full">

      {/* STORIES */}
      <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">

        {Stories.data.map((story, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >

            <img
              src={story.images}
              alt={story.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">

              <h2 className="text-xl font-bold mb-2">
                {story.title}
              </h2>

              <p className="text-gray-600">
                {story.description}
              </p>

              <div className="flex gap-4 mt-4 border-t pt-3 flex-wrap">

                <button>
                  👍 Like
                </button>

                <button
                  onClick={() => setShowComments(true)}
                  className="text-blue-600"
                >
                  💬 Comment
                </button>

                <button>
                  🔗 Share
                </button>

                <button>
                  ⬇️ Download
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

      {/* COMMENTS */}
      {showComments && (
        <div className="w-1/3">

          <div className="bg-white shadow-md rounded-lg p-5 sticky top-5">

            <div className="flex justify-between items-center mb-4">

              <h2 className="text-xl font-bold">
                Comments
              </h2>

              <button
                onClick={() => setShowComments(false)}
                className="text-red-600"
              >
                <IoIosClose size={32} />
              </button>

            </div>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment..."
              className="w-full h-24 border border-gray-300 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleComment}
              className="w-full mt-3 bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800"
            >
              Send Comment
            </button>

            <div className="mt-5 border-t pt-4">

              <h3 className="font-bold mb-3">
                All Comments ({comments.length})
              </h3>

              {comments.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  No comments yet.
                </p>
              ) : (
                <div className="space-y-3 max-h-80 overflow-y-auto">

                  {comments.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 rounded-md p-3"
                    >
                      <p className="text-gray-800">
                        {item}
                      </p>
                    </div>
                  ))}

                </div>
              )}

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default CardStory;





