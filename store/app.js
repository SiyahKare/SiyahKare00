export const state = () => ({
  navLinks: [
    // {
    //   title: {
    //     tr: 'Formül',
    //     en: 'Formül-EN',
    //     ru: 'Formül-RU',
    //   },
    //   nLink: '',
    //   subMenu: [
    //     {
    //       text: {
    //         tr: 'example_TR',
    //         en: 'example_EN',
    //         ru: 'example_RU',
    //       },
    //       nLink: 'account_balance',
    //       icon: 'account_balance'
    //     }
    //   ]
    // },
    {
      title: {
        tr: 'FORMÜL',
        en: 'FORMULA',
        ru: 'FORMULA',
      },
      icon: 'apps',
      nLink: '',
      subMenu: [
        {
          "title": {
            "tr": "Formül",
            "en": "Formula",
            "ru": "Formula"
          },
          "icon": "lightbulb_outline",
          "nLink": "page/formula"
        },
        {
          "title": {
            "tr": "Hakkımızda",
            "en": "About Us",
            "ru": "About Us"
          },
          "icon": "info_outline",
          "nLink": "page/about"
        },
        {
          "title": {
            "tr": "Teknoloji Altyapımız",
            "en": "Technology Stack",
            "ru": "Technology Stack"
          },
          "icon": "layers",
          "nLink": "page/technology-stack"
        },
        {
          "title": {
            "tr": "Bulut Mimarisi",
            "en": "Cloud Architecture",
            "ru": "Cloud Architecture"
          },
          "icon": "cloud",
          "nLink": "nLink"
        },
        {
          "title": {
            "tr": "Referanslar",
            "en": "References",
            "ru": "References"
          },
          "icon": "content_paste",
          "nLink": "nLink"
        },
        {
          "title": {
            "tr": "İletişim",
            "en": "Contact",
            "ru": "Contact"
          },
          "icon": "call",
          "nLink": "nLink"
        }
      ]
    },
    {
      title: {
        tr: 'SERVİSLER',
        en: 'SERVICES',
        ru: 'SERVICES',
      },
      icon: 'view_day',
      nLink: '',
      subMenu: [
        {
          "title": {
            "tr": "Finansal Hizmetler",
            "en": "Digital Marketing",
            "ru": "Digital Marketing"
          },
          "icon": "dns",
          "nLink": "nLink"
        },
        {
          "title": {
            "tr": "Teknoloji Desteği",
            "en": "Media Production",
            "ru": "Media Production"
          },
          "icon": "build",
          "nLink": "nLink"
        },
        {
          "title": {
            "tr": "Dijital Pazarlama",
            "en": "Growth Hacking",
            "ru": "Growth Hacking"
          },
          "icon": "security",
          "nLink": "nLink"
        },
        {
          "title": {
            "tr": "Growth Hacking",
            "en": "Web Development",
            "ru": "Web Development"
          },
          "icon": "people",
          "nLink": "nLink"
        },
        {
          "title": {
            "tr": "Web Geliştirme",
            "en": "Mobile Development",
            "ru": "Mobile Development"
          },
          "icon": "assignment",
          "nLink": "nLink"
        },
        {
          "title": {
            "tr": "Mobil Geliştirme",
            "en": "Fullstack Development",
            "ru": "Fullstack Development"
          },
          "icon": "monetization_on",
          "nLink": "nLink"
        }
      ]
    },
    {
      title: {
        tr: 'ÇÖZÜMLER',
        en: 'SOLUTIONS',
        ru: 'SOLUTIONS',
      },
      icon: 'view_carousel',
      nLink: '',
      subMenu: [
        {
          "title": {
            "tr": "E-Ticaret Çözümleri",
            "en": "E-Commerce Solutions",
            "ru": "E-Commerce Solutions"
          },
          "icon": "shopping_cart",
          "nLink": "nLink"
        },
        {
          "title": {
            "tr": "İş Otomasyonları",
            "en": "Business Automations",
            "ru": "Business Automations"
          },
          "icon": "fingerprint",
          "nLink": "nLink"
        },
        {
          "title": {
            "tr": "Endüstriyel Blokzinciri",
            "en": "Industrial Blockchain",
            "ru": "Industrial Blockchain"
          },
          "icon": "art_track",
          "nLink": "nLink"
        },
        {
          "title": {
            "tr": "Kurs Otomasyonu",
            "en": "Course Automation",
            "ru": "Course Automation"
          },
          "icon": "view_quilt",
          "nLink": "nLink"
        },
        {
          "title": {
            "tr": "Proaktif Yönetim",
            "en": "Proactive Management",
            "ru": "Proactive Management"
          },
          "icon": "location_on",
          "nLink": "nLink"
        },
        {
          "title": {
            "tr": "Yazılım Mühendisliği",
            "en": "Software Engineering",
            "ru": "Software Engineering"
          },
          "icon": "attach_money",
          "nLink": "nLink"
        }
      ]
    },
  ],
  loginModal: false
});

export const mutations = {
  openModal(state, payload) {
    state[payload] = true
  },
  closeModal(state, payload) {
    state[payload] = false
  }
};

export const actions = {
  openModal({commit, state}, payload){
    commit('openModal', payload)
  },
  closeModal({commit, state}, payload){
    commit('closeModal', payload)
  }
};

export const getters = {};


