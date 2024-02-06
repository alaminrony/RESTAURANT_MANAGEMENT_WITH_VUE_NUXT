export default function ({ redirect }) {
  const isAuthenticated = localStorage.getItem("is_authenticated");
  const authToken       = localStorage.getItem("auth_token");
  const userData        = localStorage.getItem("user_data");

  if (!isAuthenticated || !authToken || !userData) {
    return redirect("/login");
  }

  const user = JSON.parse(userData);
  if (user.is_super_admin !== 1) {
    // Non-super admin user, perform logout and redirect
    clearLocalStorageAndRedirect();
  }

  function clearLocalStorageAndRedirect() {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("is_authenticated");
    localStorage.removeItem("user_data");
    redirect("/login");
  }
}
