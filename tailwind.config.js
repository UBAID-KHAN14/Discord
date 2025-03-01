/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      width: {
        'lessthan_768px': '768',
      },
      backgroundImage: {
        'container1': "url('/assets/contianer1.png')",
        'container2': "url('/assets/container2.png')",
        'head1': "url('/assets/head1.svg')",
        'head2': "url('/assets/head2.svg')",
        'head3': "url('/assets/head.svg')",

      }
    },
  },
  plugins: [],
}

