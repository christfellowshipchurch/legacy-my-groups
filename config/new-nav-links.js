const navigation = {
  mainMenuLinks: [
    {
      call: 'Groups & Classes',
      action: '/groups',
    },
    {
      call: 'Connect',
      action: '/connect',
    },
    {
      call: 'Home',
      action: '/home',
    },
    {
      call: 'Profile',
      action: '/profile',
    },
  ],
  subMenuLinks: [],
  additionalLinks: [
    {
      headerLink: {
        call: 'Legal',
        action: '/privacy-policy',
      },
      subLinks: [
        {
          call: 'Privacy Policy',
          action: '/privacy-policy',
        },
        {
          call: 'Terms of Use',
          action: '/terms-of-use',
        },
      ],
    },
  ],
};

export default navigation;
