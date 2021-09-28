import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.SALES.TEXT',
        icon: 'monitor',
        link: '/',
        badge: {
            variant: 'badge-soft-secondary',
            text: 'MENUITEMS.SALES.BADGE',
        },
    },
    {
        id: 3,
        label: 'MENUITEMS.ANALYTICS.TEXT',
        icon: 'pie-chart',
        link: '/analytics'
    },
    {
        id: 4,
        label: 'MENUITEMS.APPLICATIONS.TEXT',
        isTitle: true
    },
    {
        id: 5,
        label: 'MENUITEMS.CALENDAR.TEXT',
        icon: 'calendar',
        link: '/calendar'
    },
    {
        id: 5,
        label: 'MENUITEMS.CHAT.TEXT',
        icon: 'message-square',
        link: '/chat',
        badge: {
            variant: 'badge-soft-danger',
            text: 'MENUITEMS.CHAT.BADGE',
        },
    },
    {
        id: 6,
        label: 'MENUITEMS.KANBANBOARD.TEXT',
        icon: 'trello',
        link: '/kanban-board'
    },
    {
        id: 7,
        label: 'MENUITEMS.FILEMANAGER.TEXT',
        icon: 'folder',
        link: '/file-manager'
    },
    {
        id: 8,
        label: 'MENUITEMS.EMAIL.TEXT',
        icon: 'mail',
        subItems: [
            {
                id: 9,
                label: 'MENUITEMS.EMAIL.LIST.INBOX',
                link: '/email/inbox',
                parentId: 8
            },
            {
                id: 10,
                label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                link: '/email/read/1',
                parentId: 8
            }
        ]
    },
    {
        id: 11,
        label: 'MENUITEMS.CONTACTS.TEXT',
        icon: 'book',
        subItems: [
            {
                id: 12,
                label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                link: '/contacts/grid',
                parentId: 11
            },
            {
                id: 13,
                label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                link: '/contacts/list',
                parentId: 11
            },
            {
                id: 14,
                label: 'MENUITEMS.CONTACTS.LIST.SETTINGS',
                link: '/contacts/settings',
                parentId: 11
            }
        ]
    },
    {
        id: 15,
        label: 'MENUITEMS.GALLERY.TEXT',
        icon: 'image',
        link: '/gallery'
    },
    {
        id: 16,
        label: 'MENUITEMS.PROJECTS.TEXT',
        icon: 'briefcase',
        subItems: [
            {
                id: 17,
                label: 'MENUITEMS.PROJECTS.LIST.PROJECTSGRID',
                link: '/projects/project-grid',
                parentId: 16
            },
            {
                id: 18,
                label: 'MENUITEMS.PROJECTS.LIST.PROJECTSLIST',
                link: '/projects/project-list',
                parentId: 16
            },
            {
                id: 19,
                label: 'MENUITEMS.PROJECTS.LIST.PROJECTSOVERVIEW',
                link: '/projects/project-overview',
                parentId: 16
            },
            {
                id: 20,
                label: 'MENUITEMS.PROJECTS.LIST.CREATENEW',
                link: '/projects/project-create',
                parentId: 16
            }
        ]
    },
    {
        id: 21,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 22,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        icon: 'user',
        badge: {
            variant: 'info',
            text: 'MENUITEMS.AUTHENTICATION.BADGE',
        },
        subItems: [
            {
                id: 23,
                label: 'MENUITEMS.AUTHENTICATION.LIST.SIGNIN',
                subItems: [
                    {
                        id: 24,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: 'account/signin/basic',
                        parentId: 23
                    },
                    {
                        id: 25,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: 'account/signin/cover',
                        parentId: 23
                    },
                ]
            },
            {
                id: 26,
                label: 'MENUITEMS.AUTHENTICATION.LIST.SIGNUP',
                subItems: [
                    {
                        id: 27,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: 'account/signup/basic',
                        parentId: 26
                    },
                    {
                        id: 28,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: 'account/signup/cover',
                        parentId: 26
                    },
                ]
            },
            {
                id: 29,
                label: 'MENUITEMS.AUTHENTICATION.LIST.SIGNOUT',
                subItems: [
                    {
                        id: 30,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: 'account/signout/basic',
                        parentId: 29
                    },
                    {
                        id: 31,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: 'account/signout/cover',
                        parentId: 29
                    },
                ]
            },
            {
                id: 32,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                subItems: [
                    {
                        id: 33,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: 'account/lockscreen/basic',
                        parentId: 32
                    },
                    {
                        id: 34,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: 'account/lockscreen/cover',
                        parentId: 32
                    },
                ]
            },
            {
                id: 35,
                label: 'MENUITEMS.AUTHENTICATION.LIST.FORGOTPASSWORD',
                subItems: [
                    {
                        id: 36,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: 'account/forgot-password/basic',
                        parentId: 32
                    },
                    {
                        id: 37,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: 'account/forgot-password/cover',
                        parentId: 32
                    },
                ]
            },
            {
                id: 38,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RESETPWD',
                subItems: [
                    {
                        id: 39,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: 'account/reset-password/basic',
                        parentId: 38
                    },
                    {
                        id: 40,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: 'account/reset-password/cover',
                        parentId: 38
                    },
                ]
            },
            {
                id: 41,
                label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
                subItems: [
                    {
                        id: 42,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: 'account/email-verification/basic',
                        parentId: 41
                    },
                    {
                        id: 43,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: 'account/email-verification/cover',
                        parentId: 41
                    },
                ]
            },
            {
                id: 44,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                subItems: [
                    {
                        id: 45,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: 'account/twostep-verification/basic',
                        parentId: 44
                    },
                    {
                        id: 46,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: 'account/twostep-verification/cover',
                        parentId: 44
                    },
                ]
            },
            {
                id: 47,
                label: 'MENUITEMS.AUTHENTICATION.LIST.THANKYOU',
                subItems: [
                    {
                        id: 48,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: 'account/thankyou/basic',
                        parentId: 47
                    },
                    {
                        id: 49,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: 'account/thankyou/cover',
                        parentId: 47
                    },
                ]
            }
        ]
    },
    {
        id: 50,
        label: 'MENUITEMS.ERRORSPAGES.TEXT',
        icon: 'alert-circle',
        subItems: [
            {
                id: 51,
                label: 'MENUITEMS.ERRORSPAGES.LIST.404BASIC',
                link: '/pages/404-basic',
                parentId: 50
            },
            {
                id: 52,
                label: 'MENUITEMS.ERRORSPAGES.LIST.404COVER',
                link: '/pages/404-cover',
                parentId: 50
            },
            {
                id: 53,
                label: 'MENUITEMS.ERRORSPAGES.LIST.500BASIC',
                link: '/pages/500-basic',
                parentId: 50
            },
            {
                id: 53,
                label: 'MENUITEMS.ERRORSPAGES.LIST.500COVER',
                link: '/pages/500-cover',
                parentId: 50
            },
        ]
    },
    {
        id: 54,
        label: 'MENUITEMS.UTILITY.TEXT',
        icon: 'file-text',
        subItems: [
            {
                id: 55,
                label: 'MENUITEMS.UTILITY.LIST.STARTER',
                link: '/pages/starter',
                parentId: 54
            },
            {
                id: 56,
                label: 'MENUITEMS.UTILITY.LIST.PROFILE',
                link: '/pages/profile',
                parentId: 54
            },
            {
                id: 56,
                label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                link: '/pages/maintenance',
                parentId: 54
            },
            {
                id: 57,
                label: 'MENUITEMS.UTILITY.LIST.COMINGSOON',
                link: '/pages/comingsoon',
                parentId: 54
            },
            {
                id: 58,
                label: 'MENUITEMS.UTILITY.LIST.FAQS',
                link: '/pages/faqs',
                parentId: 54
            }
        ]
    },
    {
        id: 59,
        label: 'MENUITEMS.PRICING.TEXT',
        icon: 'tag',
        subItems: [
            {
                id: 60,
                label: 'MENUITEMS.PRICING.LIST.BASIC',
                link: '/pricing/basic',
                parentId: 59
            },
            {
                id: 61,
                label: 'MENUITEMS.PRICING.LIST.TABLE',
                link: '/pricing/table',
                parentId: 59
            },
        ]
    },
    {
        id: 62,
        label: 'MENUITEMS.INVOICES.TEXT',
        icon: 'file',
        subItems: [
            {
                id: 63,
                label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
                link: '/invoices/list',
                parentId: 62
            },
            {
                id: 64,
                label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
                link: '/invoices/detail',
                parentId: 62
            },
        ]
    },
    {
        id: 65,
        label: 'MENUITEMS.TIMELINE.TEXT',
        icon: 'award',
        subItems: [
            {
                id: 63,
                label: 'MENUITEMS.TIMELINE.LIST.CENTERVIEW',
                link: '/timeline/center',
                parentId: 62
            },
            {
                id: 64,
                label: 'MENUITEMS.TIMELINE.LIST.LEFTVIEW',
                link: '/timeline/left',
                parentId: 62
            },
            {
                id: 64,
                label: 'MENUITEMS.TIMELINE.LIST.HORIZONTALVIEW',
                link: '/timeline/horizontal',
                parentId: 62
            },
        ]
    },
    {
        id: 65,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true
    },
    {
        id: 66,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'package',
        subItems: [
            {
                id: 67,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/ui/alerts',
                parentId: 66
            },
            {
                id: 67,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/ui/buttons',
                parentId: 66
            },
            {
                id: 67,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '/ui/cards',
                parentId: 66
            },
            {
                id: 68,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '/ui/carousel',
                parentId: 66
            },
            {
                id: 69,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '/ui/dropdowns',
                parentId: 66
            },
            {
                id: 70,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '/ui/grid',
                parentId: 66
            },
            {
                id: 71,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '/ui/images',
                parentId: 66
            },
            {
                id: 72,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '/ui/modals',
                parentId: 66
            },
            {
                id: 73,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '/ui/progressbars',
                parentId: 66
            },
            {
                id: 74,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/ui/tabs',
                parentId: 66
            },
            {
                id: 75,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/ui/typography',
                parentId: 66
            },
            {
                id: 76,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '/ui/video',
                parentId: 66
            },
            {
                id: 77,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/ui/general',
                parentId: 66
            },
            {
                id: 78,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: '/ui/colors',
                parentId: 66
            },
            {
                id: 79,
                label: 'MENUITEMS.UIELEMENTS.LIST.UTILITIES',
                link: '/ui/utilities',
                parentId: 66
            }
        ]
    },
    {
        id: 80,
        label: 'MENUITEMS.EXTENDED.TEXT',
        icon: 'cpu',
        subItems: [
            {
                id: 81,
                label: 'MENUITEMS.EXTENDED.LIST.LIGHTBOX',
                link: '/extended/lightbox',
                parentId: 80
            },
            {
                id: 82,
                label: 'MENUITEMS.EXTENDED.LIST.RANGESLIDER',
                link: '/extended/rangeslider',
                parentId: 80
            },
            {
                id: 83,
                label: 'MENUITEMS.EXTENDED.LIST.SWEETALERT',
                link: '/extended/sweet-alert',
                parentId: 80
            },
            {
                id: 84,
                label: 'MENUITEMS.EXTENDED.LIST.RATING',
                link: '/extended/rating',
                parentId: 80
            },
            {
                id: 85,
                label: 'MENUITEMS.EXTENDED.LIST.NOTIFICATION',
                link: '/extended/notification',
                parentId: 80
            },
            {
                id: 86,
                label: 'MENUITEMS.EXTENDED.LIST.SWIPERSLIDER',
                link: '/extended/swiper-slider',
                parentId: 80
            }
        ]
    },
    {
        id: 87,
        label: 'MENUITEMS.WIDGETS.TEXT',
        icon: 'grid',
        link: '/widgets'
    },
    {
        id: 88,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'edit-3',
        subItems: [
            {
                id: 89,
                label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                link: '/forms/basic',
                parentId: 88
            },
            {
                id: 89,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/forms/validation',
                parentId: 88
            },
            {
                id: 90,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/forms/advanced',
                parentId: 88
            },
            {
                id: 91,
                label: 'MENUITEMS.FORMS.LIST.EDITOR',
                link: '/forms/editors',
                parentId: 88
            },
            {
                id: 92,
                label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                link: '/forms/uploads',
                parentId: 88
            },
            {
                id: 93,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: '/forms/wizard',
                parentId: 88
            },
            {
                id: 94,
                label: 'MENUITEMS.FORMS.LIST.MASK',
                link: '/forms/mask',
                parentId: 88
            }
        ]
    },
    {
        id: 95,
        icon: 'database',
        label: 'MENUITEMS.TABLES.TEXT',
        subItems: [
            {
                id: 96,
                label: 'MENUITEMS.TABLES.LIST.BASIC',
                link: '/tables/basic',
                parentId: 95
            },
            {
                id: 97,
                label: 'MENUITEMS.TABLES.LIST.ADVANCEDTABLES',
                link: '/tables/advanced',
                parentId: 95
            }
        ]
    },
    {
        id: 98,
        icon: 'bar-chart-2',
        label: 'MENUITEMS.APEXCHARTS.TEXT',
        subItems: [
            {
                id: 99,
                label: 'MENUITEMS.APEXCHARTS.LIST.LINE',
                link: '/charts/line',
                parentId: 98
            },
            {
                id: 100,
                label: 'MENUITEMS.APEXCHARTS.LIST.AREA',
                link: '/charts/area',
                parentId: 98
            },
            {
                id: 101,
                label: 'MENUITEMS.APEXCHARTS.LIST.COLUMN',
                link: '/charts/column',
                parentId: 98
            },
            {
                id: 102,
                label: 'MENUITEMS.APEXCHARTS.LIST.BAR',
                link: '/charts/bar',
                parentId: 98
            },
            {
                id: 103,
                label: 'MENUITEMS.APEXCHARTS.LIST.MIXED',
                link: '/charts/mixed',
                parentId: 98
            },
            {
                id: 104,
                label: 'MENUITEMS.APEXCHARTS.LIST.TIMELINE',
                link: '/charts/timeline',
                parentId: 98
            },
            {
                id: 105,
                label: 'MENUITEMS.APEXCHARTS.LIST.CANDLESTICK',
                link: '/charts/candlestick',
                parentId: 98
            },
            {
                id: 106,
                label: 'MENUITEMS.APEXCHARTS.LIST.BOXPLOT',
                link: '/charts/boxplot',
                parentId: 98
            },
            {
                id: 107,
                label: 'MENUITEMS.APEXCHARTS.LIST.BUBBLE',
                link: '/charts/bubble',
                parentId: 98
            },
            {
                id: 108,
                label: 'MENUITEMS.APEXCHARTS.LIST.SCATTER',
                link: '/charts/scatter',
                parentId: 98
            },
            {
                id: 109,
                label: 'MENUITEMS.APEXCHARTS.LIST.HEATMAP',
                link: '/charts/heatmap',
                parentId: 98
            },
            {
                id: 110,
                label: 'MENUITEMS.APEXCHARTS.LIST.TREEMAP',
                link: '/charts/treemap',
                parentId: 98
            },
            {
                id: 111,
                label: 'MENUITEMS.APEXCHARTS.LIST.PIE',
                link: '/charts/pie',
                parentId: 98
            },
            {
                id: 112,
                label: 'MENUITEMS.APEXCHARTS.LIST.RADIALBAR',
                link: '/charts/radialbar',
                parentId: 98
            },
            {
                id: 113,
                label: 'MENUITEMS.APEXCHARTS.LIST.RADAR',
                link: '/charts/radar',
                parentId: 98
            },
            {
                id: 114,
                label: 'MENUITEMS.APEXCHARTS.LIST.POLARAREA',
                link: '/charts/polararea',
                parentId: 98
            }
        ]
    },
    {
        id: 115,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'archive',
        subItems: [
            {
                id: 116,
                label: 'MENUITEMS.ICONS.LIST.UNICONS',
                link: '/icons/unicons',
                parentId: 115
            },
            {
                id: 117,
                label: 'MENUITEMS.ICONS.LIST.FEATHERICONS',
                link: '/icons/feather-icon',
                parentId: 115
            },
            {
                id: 118,
                label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                link: '/icons/boxicons',
                parentId: 115
            },
            {
                id: 119,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: '/icons/materialdesign',
                parentId: 115
            },
            {
                id: 120,
                label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                link: '/icons/font-awesome',
                parentId: 115
            },
        ]
    },
    {
        id: 121,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'map-pin',
        subItems: [
            {
                id: 122,
                label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                link: '/maps/google',
                parentId: 121
            },
            {
                id: 123,
                label: 'MENUITEMS.MAPS.LIST.LEAFLET',
                link: '/maps/leaflet',
                parentId: 121
            }
        ]
    },
    {
        id: 124,
        label: 'MENUITEMS.MULTILEVEL.TEXT',
        icon: 'share-2',
        subItems: [
            {
                id: 125,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
                parentId: 124
            },
            {
                id: 126,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
                subItems: [
                    {
                        id: 127,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
                        parentId: 126,
                    },
                    {
                        id: 128,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
                        parentId: 126,
                    }
                ]
            },
        ]
    }
];

