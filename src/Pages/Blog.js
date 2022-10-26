import React from 'react';

const Blog = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2  p-5 bg-slate-200'>
            <div className='border-2 border-sky-400 m-3 p-3'>
                <h3 className='text-blue-500'>
                    What is cors?
                </h3>
                <p>
                    <small>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </small>
                </p>
            </div>
            <div className='border-2 border-sky-400 m-3 p-3'>
                <h3 className='text-blue-500'> Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p><small>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.And other options are On this page.
                    Add and initialize the Authentication SDK.
                    (Optional) Prototype and test with Firebase Local Emulator Suite.
                    Sign up new users.
                    Sign in existing users.
                    Set an authentication state observer and get user data.
                    Next steps.
                </small></p>
            </div>

            <div className='border-2 border-sky-400 m-3 p-3'>
                <h3 className='text-blue-500'>
                How does the private route work?
                </h3>
                <p><small>
                The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </small></p>
            </div>
            <div className='border-2 border-sky-400 m-3 p-3'>
                <h3 className='text-blue-500'>
                What is Node? How does Node work?
                </h3>
                <p><small>
                Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return
                    </small></p>
            </div>
        </div>
    );
};

export default Blog;