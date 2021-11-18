import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/actions/authAction";

const NavBar = () => {
  /* Mobile collapsed navbar */
  const [isOpen, setIsOpen] = useState(false);

  /* Variable to store if the user is logged in */
  const [isAuthenticated, setAuthentication] = useState(null);

  useEffect(() => {
    /* Check if the user is logged */
    setAuthentication(localStorage.getItem("token") !== null);
  }, []);

  const dispatch = useDispatch();

    const handleLogout = () => {
        try {
          /* Dispatches the signOut function from Redux */
            dispatch(signOut());
        } catch (e) {
            console.log(e);
        }
    }

  return (
    <div>
      <nav className="fixed top-0 left-0 z-50 w-full bg-gray-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/">
                  <img
                    className="w-8 h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <a
                    href="/manage-event"
                    className="px-3 py-2 text-sm font-medium text-white text-gray-300 rounded-md hover:bg-gray-700"
                  >
                    Create a new event
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  {!isAuthenticated && (
                    <>
                      <a
                        href="/login"
                        className="px-3 py-2 text-sm font-medium text-white text-gray-300 rounded-md hover:bg-gray-700"
                      >
                        SIGN IN
                      </a>
                      <a
                        href="/register"
                        className="px-3 py-2 text-sm font-medium text-white text-gray-300 rounded-md hover:bg-gray-700"
                      >
                        SIGN UP
                      </a>
                    </>
                  )}

                  {isAuthenticated && (
                    <button
                      onClick={handleLogout}
                      className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      SIGN OUT
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex -mr-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/manage-event"
                  className="block px-3 py-2 text-base font-medium text-white text-gray-300 rounded-md hover:bg-gray-700"
                >
                  Create a new event
                </a>

                <a
                  href="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  SIGN IN
                </a>

                <a
                  href="/register"
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  SIGN UP
                </a>

                <button
                  onClick={handleLogout}
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  SIGN OUT
                </button>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default NavBar;
