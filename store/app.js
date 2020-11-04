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
          "nLink": "page/cloud-server-architecture"
        },
        {
          "title": {
            "tr": "Referanslar",
            "en": "References",
            "ru": "References"
          },
          "icon": "content_paste",
          "nLink": "page/references"
        },
        {
          "title": {
            "tr": "İletişim",
            "en": "Contact",
            "ru": "Contact"
          },
          "icon": "call",
          "nLink": "page/contact"
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
          "nLink": "page/financial-services"
        },
        {
          "title": {
            "tr": "Teknoloji Desteği",
            "en": "Media Production",
            "ru": "Media Production"
          },
          "icon": "build",
          "nLink": "page/technology-support"
        },
        {
          "title": {
            "tr": "Dijital Pazarlama",
            "en": "Growth Hacking",
            "ru": "Growth Hacking"
          },
          "icon": "security",
          "nLink": "page/digital-marketing"
        },
        {
          "title": {
            "tr": "Growth Hacking",
            "en": "Web Development",
            "ru": "Web Development"
          },
          "icon": "people",
          "nLink": "page/growth-hacking"
        },
        {
          "title": {
            "tr": "Web Geliştirme",
            "en": "Mobile Development",
            "ru": "Mobile Development"
          },
          "icon": "assignment",
          "nLink": "page/web-development"
        },
        {
          "title": {
            "tr": "Mobil Geliştirme",
            "en": "Fullstack Development",
            "ru": "Fullstack Development"
          },
          "icon": "monetization_on",
          "nLink": "page/mobile-development"
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
          "nLink": "page/ecommerce-solutions"
        },
        {
          "title": {
            "tr": "İş Otomasyonları",
            "en": "Business Automations",
            "ru": "Business Automations"
          },
          "icon": "fingerprint",
          "nLink": "page/business-automations"
        },
        {
          "title": {
            "tr": "Endüstriyel Blokzinciri",
            "en": "Industrial Blockchain",
            "ru": "Industrial Blockchain"
          },
          "icon": "art_track",
          "nLink": "page/industrial-blockchain"
        },
        {
          "title": {
            "tr": "Kurs Otomasyonu",
            "en": "Course Automation",
            "ru": "Course Automation"
          },
          "icon": "view_quilt",
          "nLink": "page/course-automation"
        },
        {
          "title": {
            "tr": "Proaktif Yönetim",
            "en": "Proactive Management",
            "ru": "Proactive Management"
          },
          "icon": "location_on",
          "nLink": "page/proactive-management"
        },
        {
          "title": {
            "tr": "Yazılım Mühendisliği",
            "en": "Software Engineering",
            "ru": "Software Engineering"
          },
          "icon": "attach_money",
          "nLink": "page/software-engineering"
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


