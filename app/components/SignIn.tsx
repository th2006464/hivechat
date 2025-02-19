import { signIn } from "@/auth"
 
function Login() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("credentials", formData)
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  )
}

export default Login