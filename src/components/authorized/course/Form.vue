<template>
  <div class="flex flex-col px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
    <div class="mb-4">
      <label
        class="block mb-2 text-sm font-bold text-grey-darker"
        for="username"
      >
        Username
      </label>
      <input
        id="username"
        class="w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
        type="text"
        placeholder="Username"
      />
    </div>
    <div class="mb-6">
      <label
        class="block mb-2 text-sm font-bold text-grey-darker"
        for="password"
      >
        Password
      </label>
      <input
        id="password"
        class="w-full px-3 py-2 mb-3 border rounded shadow appearance-none border-red text-grey-darker"
        type="password"
        placeholder="******************"
      />
      <p class="text-xs italic text-red">Please provide a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button
        class="px-4 py-2 font-bold text-white bg-green-400 rounded bg-blue hover:bg-blue-dark"
        type="button"
      >
        Sign In
      </button>
      <a
        class="inline-block text-sm font-bold align-baseline text-blue hover:text-blue-darker"
        href="#"
      >
        Forgot Password?
      </a>
    </div>
  </div>
</template>
