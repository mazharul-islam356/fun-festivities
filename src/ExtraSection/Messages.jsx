import { GoUnread } from 'react-icons/go';
import { FaCloudsmith } from 'react-icons/fa';
const Messages = () => {
    return (
        <div className='flex items-center'>
            <div className="rounded-xl artboard phone-4 bg-slate-200">

            <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-52 mb-1 mt-2 mx-auto" />
    </div>
    <hr />
    <div className="flex gap-4 mb-1 ml-4 mt-2 items-center">
        <p className='font-bold underline'>All</p> <p>Unread</p>
        <div className='flex gap-2 ml-52'>
        <GoUnread></GoUnread>
        <FaCloudsmith></FaCloudsmith>
        </div>

    </div>
    <hr />

    <div className='flex items-center justify-center mt-72'>
        <img src="https://i.ibb.co/y684XMW/icons8-no-message-48.png" alt="" />
        <p>No message show</p>
    </div>
            
            </div>


            <div className='ml-96 text-3xl font-bold'>
                <p>Welcome to message center!</p>
            </div>
        </div>
    );
};

export default Messages;