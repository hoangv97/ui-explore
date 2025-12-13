export const ACCESSIBLE_SAMPLE = `<div class="bg-[#F9FAFB] p-8 max-w-md mx-auto border border-gray-300 rounded-lg text-gray-900">
   <h1 class="text-3xl font-bold mb-2">Application Form</h1>
   <p class="text-lg text-gray-700 mb-6 leading-relaxed">Please fill out the details below to proceed with your request. All fields are required.</p>
   
   <form class="space-y-6">
     <div>
        <label for="full-name" class="block text-base font-bold mb-2 text-gray-900">
          Full Name <span class="text-red-700" aria-label="required">*</span>
        </label>
        <input 
          type="text" 
          id="full-name" 
          aria-required="true"
          class="w-full p-4 border-2 border-gray-600 rounded-lg text-lg bg-white text-gray-900 focus:border-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-shadow" 
          placeholder="e.g. John Doe" 
        />
        <p class="mt-2 text-sm text-gray-700">Enter your name as it appears on your ID.</p>
     </div>
     
     <div class="flex items-start">
        <div class="flex items-center h-6">
          <input id="terms" type="checkbox" class="w-6 h-6 border-2 border-gray-600 rounded focus:ring-4 focus:ring-blue-300 text-blue-700" />
        </div>
        <div class="ml-3 text-base">
          <label for="terms" class="font-medium text-gray-900">I agree to the terms and conditions</label>
        </div>
     </div>
     
     <button 
        type="button" 
        class="w-full bg-blue-700 text-white text-lg font-bold py-4 rounded-lg shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-orange-400 focus:ring-offset-2 transition-colors min-h-[44px]"
     >
        Submit Application
     </button>
   </form>
</div>`;