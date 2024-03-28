import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <section className="bg-gray-100 min-h-screen flex items-center justify-center">
        <main className="max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <div className="section-registration">
            <div className="container mx-auto">
              <div className="registration-image">
                <img
                  src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                  alt="register"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="registration mt-8">
                <h1 className="text-3xl font-bold mb-4 text-center">Login Form</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="username" className="block">Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>

                  <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;