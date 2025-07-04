const educationHistory = [
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika' },
    { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 1 Depok', major: 'MIPA' }
  ];
  
  const skills = [
    { name: 'Vue.js', level: 'Mahir' },
    { name: 'JavaScript', level: 'Mahir' },
    { name: 'Tailwind CSS', level: 'Mahir' },
    { name: 'Node.js', level: 'Menengah' },
    { name: 'Express.js', level: 'Menengah' },
    { name: 'PostgreSQL', level: 'Menengah' },
    { name: 'Git & GitHub', level: 'Mahir' },
    { name: 'HTML5 & CSS3', level: 'Mahir' }
  ];
  
  const projects = [
    {
      title: 'Website Toko Online',
      image: 'https://saudagarwp.com/wp-content/uploads/2021/12/demo-default.webp',
      description: 'Platform e-commerce dengan fitur keranjang belanja.',
      tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Website Rental Online',
      image: 'https://lh7-us.googleusercontent.com/QAZ1bLurZNmuIZ6QbTwwerG9kywRMsLVn63O_F_ruXSiolhLkeIJM1FF7tp5_dsvHZ9ZB18b4G6w5bB_BxHyq2oEaDYHKFtrnPZN5uVtUWDAJ7vd-ulUYXK2wF_RYhvcRRHW1Ly8hPWPipXVbZG2WA',
      description: 'Website untuk sewa mobil secara online.',
      tech: ['React', 'Laravel', 'MySql'],
      link: '#'
    }
  ];
  
  module.exports = { educationHistory, skills, projects };