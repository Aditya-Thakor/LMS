import { Link } from "react-router-dom";
export default function Input({title, subtitle, fields, buttonText, footerText, linkText,linkTo, onSubmit}) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <h2 className="text-center text-2xl font-bold text-gray-900">{title}</h2>
       <p className="mt-2 text-center text-sm text-gray-500">{subtitle}</p>
      
      <button type="button" className="mt-6 w-full rounded-lg border border-gray-200 py-3 text-sm hover:bg-gray-50">
        Continue with Google
      </button>
       
       <div className="mt-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm text-gray-400">or</span>
          <div className="h-px flex-1 bg-gray-200" />
       </div>

        <form className="space-y-4" onSubmit={onSubmit}>
          {fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="mb-2 block text-sm font-medium text-gray-700">
                {field.label}
                </label>    
                <input
                  name={field.name}
                  type={field.type}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  required={field.required !== false}
                />
            </div>
          ))}
            <button type="submit" className="w-full rounded-lg bg-gray-800 py-3 font-semibold text-white transition hover:bg-blue-600">
              {buttonText}
            </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          {footerText}{" "}
         <Link to={linkTo} className="font-semibold text-gray-900 hover:text-blue-600">
            {linkText}
          </Link>
        </p>
      </div>
      </main>
    );
}