import { Mail } from "lucide-react";

export const Signup = () => {
  return (
    <div className="join mt-8">
      <div>
        <label className="input validator join-item">
          <Mail size={16} className="text-neutral-500" />
          <input type="email" placeholder="someone@somethng.com" required />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
      </div>
      <button className="btn btn-neutral join-item">Join</button>
    </div>
  );
};
