import Link from 'next/link';

export default function NoDiscountCoupons() {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4 overflow-hidden">
      <div className="max-w-2xl w-full text-center mx-auto my-auto">
        {/* Animated Icon Container */}
        <div className="mx-auto w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 animate-pulse">
          <svg 
            className="w-14 h-14 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
            />
          </svg>
        </div>

        {/* Main Message with Better Typography */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-900 bg-clip-text text-transparent mb-4 tracking-tight leading-tight">
            No Discount Coupons Available
          </h1>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 rounded-full"></div>

          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto leading-relaxed font-light px-4">
            We're currently updating our promotional offers. New discount coupons will be available soon!
          </p>
        </div>

        {/* Compact Info Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100/50 max-w-md mx-auto mb-6">
          <div className="flex items-center justify-center mb-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-bounce"></div>
            <h3 className="text-base font-semibold text-gray-800">While you wait:</h3>
            <div className="w-2 h-2 bg-purple-500 rounded-full ml-2 animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          
          <ul className="text-gray-700 space-y-3 text-sm">
            <li className="flex items-center p-2 rounded-lg hover:bg-blue-50/50 transition-colors duration-200">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <span className="font-medium">Explore our web hosting features</span>
            </li>
            <li className="flex items-center p-2 rounded-lg hover:bg-purple-50/50 transition-colors duration-200">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium">Join our newsletter for updates</span>
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <Link 
          href="/web-hosting"
          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold text-base py-3 px-10 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl shadow-lg shadow-blue-500/25 border border-blue-500/20"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Web Hosting
        </Link>

        {/* Footer Note */}
        <p className="mt-6 text-gray-500 text-xs">
          We appreciate your patience and look forward to serving you!
        </p>
      </div>
    </div>
  );
}