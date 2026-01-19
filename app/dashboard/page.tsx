"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <nav className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-semibold text-black dark:text-zinc-50">
            E-Commerce Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:focus:ring-zinc-400/20"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-2 text-2xl font-semibold text-black dark:text-zinc-50">
            Welcome to the Dashboard
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            You are now logged in. This is a protected dashboard page.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Total Orders</p>
              <p className="mt-2 text-3xl font-semibold text-black dark:text-zinc-50">1,234</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Revenue</p>
              <p className="mt-2 text-3xl font-semibold text-black dark:text-zinc-50">$45.2K</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Customers</p>
              <p className="mt-2 text-3xl font-semibold text-black dark:text-zinc-50">892</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Products</p>
              <p className="mt-2 text-3xl font-semibold text-black dark:text-zinc-50">156</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
