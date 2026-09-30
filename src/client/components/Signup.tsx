import { Mail } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { message?: string; error?: string };

      if (!res.ok) {
        toast.error(data.error ?? "Something went wrong. Try again.");
        return;
      }

      toast.success(data.message ?? "You're on the list.");
      setEmail("");
    } catch {
      toast.error("Couldn't reach the server. Check your connection.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form
        className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
        onSubmit={handleSubmit}
      >
        <label className="input input-lg validator border-base-300 bg-base-200 flex-1">
          <Mail size={16} className="opacity-50" />
          <input
            type="email"
            placeholder="you@work.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </label>
        <button
          type="submit"
          className="btn btn-lg btn-primary font-display font-semibold"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            "Join the list"
          )}
        </button>
      </form>

      <p className="mt-4 text-sm opacity-55">
        No spam, no drip campaign. One email when it opens.
      </p>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "var(--color-base-200)",
            color: "var(--color-base-content)",
            border: "1px solid var(--color-base-300)",
          },
        }}
      />
    </>
  );
};
