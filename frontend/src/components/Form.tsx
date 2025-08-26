import { useState, type FormEvent } from "react";

const Form = () => {
  const [prompt, setPrompt] = useState<string | "">("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      alert("Please enter a prompt before generating an image.");
      return;
    }
  };

  return (
    <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
      <textarea
        name="prompt"
        id="prompt"
        rows={6}
        className="pt-2.5 pl-4 outline"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        type="submit"
        className="cursor-pointer bg-slate-900 p-2 text-white outline transition duration-150 hover:bg-slate-700"
      >
        Generate image
      </button>
    </form>
  );
};

export default Form;
