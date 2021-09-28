import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'HEADER.DASHBOARDS.TEXT',
        icon: 'monitor',
        subItems: [
            {
                id: 2,
                label: 'HEADER.DASHBOARDS.LIST.SALES',
                link: '/',
                parentId: 1
            },
            {
                id: 3,
                label: 'HEADER.DASHBOARDS.LIST.ANALYTICS',
                link: '/analytics',
                parentId: 1
            }
        ]
    },
    {
        id: 4,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'package',
        subItems: [
            {
                id: 5,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/ui/alerts',
                parentId: 4
            },
            {
                id: 6,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/ui/buttons',
                parentId: 4
            },
            {
                id: 7,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '/ui/cards',
                parentId: 4
            },
            {
                id: 8,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '/ui/carousel',
                parentId: 4
            },
            {
                id: 9,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '/ui/dropdowns',
                parentId: 4
            },
            {
                id: 10,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '/ui/grid',
                parentId: 4
            },
            {
                id: 11,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '/ui/images',
                parentId: 4
            },
            {
                id: 12,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '/ui/modals',
                parentId: 4
            },
            {
                id: 13,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '/ui/progressbars',
                parentId: 4
            },
            {
                id: 14,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/ui/tabs',
                parentId: 4
            },
            {
                id: 15,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/ui/typography',
                parentId: 4
            },
            {
                id: 16,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '/ui/video',
                parentId: 4
            },
            {
                id: 17,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/ui/general',
                parentId: 4
            },
            {
                id: 18,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: '/ui/colors',
                parentId: 4
            },
            {
                id: 19,
                label: 'MENUITEMS.UIELEMENTS.LIST.UTILITIES',
                link: '/ui/utilities',
                parentId: 4
            },
            {
                id: 20,
                label: 'MENUITEMS.EXTENDED.LIST.LIGHTBOX',
                link: '/extended/lightbox',
                parentId: 4
            },
            {
                id: 21,
                label: 'MENUITEMS.EXTENDED.LIST.RANGESLIDER',
                link: '/extended/rangeslider',
                parentId: 80
            },
            {
                id: 22,
                label: 'MENUITEMS.EXTENDED.LIST.SWEETALERT',
                link: '/extended/sweet-alert',
                parentId: 4
            },
            {
                id: 23,
                label: 'MENUITEMS.EXTENDED.LIST.RATING',
                link: '/extended/rating',
                parentId: 4
            },
            {
                id: 24,
                label: 'MENUITEMS.EXTENDED.LIST.NOTIFICATION',
                link: '/extended/notification',
                parentId: 4
            },
            {
                id: 25,
                label: 'MENUITEMS.EXTENDED.LIST.SWIPERSLIDER',
                link: '/extended/swiper-slider',
                parentId: 4
            }
        ]
    },
    {
        id: 26,
        label: 'HEADER.APPS.TEXT',
        icon: 'grid',
        subItems: [
            {
                id: 27,
                label: 'MENUITEMS.CALENDAR.TEXT',
                link: '/calendar',
                parentId: 26
            },
            {
                id: 28,
                label: 'MENUITEMS.CHAT.TEXT',
                link: '/chat',
                parentId: 26
            },
            {
                id: 29,
                label: 'MENUITEMS.KANBANBOARD.TEXT',
                link: '/kanban-board',
                parentId: 26
            },
            {
                id: 30,
                label: 'MENUITEMS.FILEMANAGER.TEXT',
                link: '/file-manager',
                parentId: 26
            },
            {
                id: 31,
                label: 'MENUITEMS.EMAIL.TEXT',
                subItems: [
                    {
                        id: 32,
                        label: 'MENUITEMS.EMAIL.LIST.INBOX',
                        link: '/email/inbox',
                        parentId: 31
                    },
                    {
                        id: 33,
                        label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                        link: '/email/read/1',
                        parentId: 31
                    }
                ]
            },
            {
                id: 34,
                label: 'MENUITEMS.CONTACTS.TEXT',
                icon: 'book',
                subItems: [
                    {
                        id: 35,
                        label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                        link: '/contacts/grid',
                        parentId: 34
                    },
                    {
                        id: 36,
                        label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                        link: '/contacts/list',
                        parentId: 34
                    },
                    {
                        id: 37,
                        label: 'MENUITEMS.CONTACTS.LIST.SETTINGS',
                        link: '/contacts/settings',
                        parentId: 34
                    }
                ]
            },
            {
                id: 38,
                label: 'MENUITEMS.GALLERY.TEXT',
                link: '/gallery',
                parentId: 26
            },
            {
                id: 39,
                label: 'MENUITEMS.PROJECTS.TEXT',
                icon: 'briefcase',
                subItems: [
                    {
                        id: 40,
                        label: 'MENUITEMS.PROJECTS.LIST.PROJECTSGRID',
                        link: '/projects/project-grid',
                        parentId: 39
                    },
                    {
                        id: 41,
                        label: 'MENUITEMS.PROJECTS.LIST.PROJECTSLIST',
                        link: '/projects/project-list',
                        parentId: 39
                    },
                    {
                        id: 42,
                        label: 'MENUITEMS.PROJECTS.LIST.PROJECTSOVERVIEW',
                        link: '/projects/project-overview',
                        parentId: 39
                    },
                    {
                        id: 43,
                        label: 'MENUITEMS.PROJECTS.LIST.CREATENEW',
                        link: '/projects/project-create',
                        parentId: 39
                    }
                ]
            },
        ]
    },
    {
        id: 44,
        label: 'HEADER.COMPONENTS.TEXT',
        icon: 'layers',
        subItems: [
            {
                id: 45,
                label: 'MENUITEMS.WIDGETS.TEXT',
                link: '/widgets',
                parentId: 44
            },
            {
                id: 46,
                label: 'MENUITEMS.FORMS.TEXT',
                subItems: [
                    {
                        id: 47,
                        label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                        link: '/forms/basic',
                        parentId: 46
                    },
                    {
                        id: 48,
                        label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                        link: '/forms/validation',
                        parentId: 46
                    },
                    {
                        id: 49,
                        label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                        link: '/forms/advanced',
                        parentId: 46
                    },
                    {
                        id: 50,
                        label: 'MENUITEMS.FORMS.LIST.EDITOR',
                        link: '/forms/editors',
                        parentId: 46
                    },
                    {
                        id: 51,
                        label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                        link: '/forms/uploads',
                        parentId: 46
                    },
                    {
                        id: 52,
                        label: 'MENUITEMS.FORMS.LIST.WIZARD',
                        link: '/forms/wizard',
                        parentId: 46
                    },
                    {
                        id: 53,
                        label: 'MENUITEMS.FORMS.LIST.MASK',
                        link: '/forms/mask',
                        parentId: 46
                    }
                ]
            },
            {
                id: 54,
                icon: 'database',
                label: 'MENUITEMS.TABLES.TEXT',
                subItems: [
                    {
                        id: 55,
                        label: 'MENUITEMS.TABLES.LIST.BASIC',
                        link: '/tables/basic',
                        parentId: 54
                    },
                    {
                        id: 56,
                        label: 'MENUITEMS.TABLES.LIST.ADVANCEDTABLES',
                        link: '/tables/advanced',
                        parentId: 54
                    }
                ]
            },
            {
                id: 57,
                icon: 'bar-chart-2',
                label: 'MENUITEMS.APEXCHARTS.TEXT',
                subItems: [
                    {
                        id: 58,
                        label: 'MENUITEMS.APEXCHARTS.LIST.LINE',
                        link: '/charts/line',
                        parentId: 57
                    },
                    {
                        id: 59,
                        label: 'MENUITEMS.APEXCHARTS.LIST.AREA',
                        link: '/charts/area',
                        parentId: 57
                    },
                    {
                        id: 60,
                        label: 'MENUITEMS.APEXCHARTS.LIST.COLUMN',
                        link: '/charts/column',
                        parentId: 57
                    },
                    {
                        id: 61,
                        label: 'MENUITEMS.APEXCHARTS.LIST.BAR',
                        link: '/charts/bar',
                        parentId: 57
                    },
                    {
                        id: 62,
                        label: 'MENUITEMS.APEXCHARTS.LIST.MIXED',
                        link: '/charts/mixed',
                        parentId: 57
                    },
                    {
                        id: 63,
                        label: 'MENUITEMS.APEXCHARTS.LIST.TIMELINE',
                        link: '/charts/timeline',
                        parentId: 57
                    },
                    {
                        id: 64,
                        label: 'MENUITEMS.APEXCHARTS.LIST.CANDLESTICK',
                        link: '/charts/candlestick',
                        parentId: 57
                    },
                    {
                        id: 65,
                        label: 'MENUITEMS.APEXCHARTS.LIST.BOXPLOT',
                        link: '/charts/boxplot',
                        parentId: 57
                    },
                    {
                        id: 66,
                        label: 'MENUITEMS.APEXCHARTS.LIST.BUBBLE',
                        link: '/charts/bubble',
                        parentId: 57
                    },
                    {
                        id: 67,
                        label: 'MENUITEMS.APEXCHARTS.LIST.SCATTER',
                        link: '/charts/scatter',
                        parentId: 57
                    },
                    {
                        id: 68,
                        label: 'MENUITEMS.APEXCHARTS.LIST.HEATMAP',
                        link: '/charts/heatmap',
                        parentId: 57
                    },
                    {
                        id: 69,
                        label: 'MENUITEMS.APEXCHARTS.LIST.TREEMAP',
                        link: '/charts/treemap',
                        parentId: 57
                    },
                    {
                        id: 70,
                        label: 'MENUITEMS.APEXCHARTS.LIST.PIE',
                        link: '/charts/pie',
                        parentId: 57
                    },
                    {
                        id: 71,
                        label: 'MENUITEMS.APEXCHARTS.LIST.RADIALBAR',
                        link: '/charts/radialbar',
                        parentId: 57
                    },
                    {
                        id: 72,
                        label: 'MENUITEMS.APEXCHARTS.LIST.RADAR',
                        link: '/charts/radar',
                        parentId: 57
                    },
                    {
                        id: 73,
                        label: 'MENUITEMS.APEXCHARTS.LIST.POLARAREA',
                        link: '/charts/polararea',
                        parentId: 57
                    }
                ]
            },
            {
                id: 74,
                label: 'MENUITEMS.ICONS.TEXT',
                icon: 'archive',
                subItems: [
                    {
                        id: 75,
                        label: 'MENUITEMS.ICONS.LIST.UNICONS',
                        link: '/icons/unicons',
                        parentId: 74
                    },
                    {
                        id: 76,
                        label: 'MENUITEMS.ICONS.LIST.FEATHERICONS',
                        link: '/icons/feather-icon',
                        parentId: 74
                    },
                    {
                        id: 77,
                        label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                        link: '/icons/boxicons',
                        parentId: 74
                    },
                    {
                        id: 78,
                        label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                        link: '/icons/materialdesign',
                        parentId: 74
                    },
                    {
                        id: 79,
                        label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                        link: '/icons/font-awesome',
                        parentId: 74
                    },
                ]
            },
            {
                id: 80,
                label: 'MENUITEMS.MAPS.TEXT',
                icon: 'map-pin',
                subItems: [
                    {
                        id: 81,
                        label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                        link: '/maps/google',
                        parentId: 80
                    },
                    {
                        id: 82,
                        label: 'MENUITEMS.MAPS.LIST.LEAFLET',
                        link: '/maps/leaflet',
                        parentId: 80
                    }
                ]
            },
        ]
    },
    {
        id: 83,
        label: 'HEADER.EXTRAPAGES.TEXT',
        icon: 'file',
        subItems: [
            {
                id: 84,
                label: 'MENUITEMS.PRICING.TEXT',
                icon: 'tag',
                subItems: [
                    {
                        id: 85,
                        label: 'MENUITEMS.PRICING.LIST.BASIC',
                        link: '/pricing/basic',
                        parentId: 84
                    },
                    {
                        id: 86,
                        label: 'MENUITEMS.PRICING.LIST.TABLE',
                        link: '/pricing/table',
                        parentId: 84
                    },
                ]
            },
            {
                id: 87,
                label: 'MENUITEMS.INVOICES.TEXT',
                icon: 'file',
                subItems: [
                    {
                        id: 88,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
                        link: '/invoices/list',
                        parentId: 87
                    },
                    {
                        id: 89,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
                        link: '/invoices/detail',
                        parentId: 87
                    },
                ]
            },
            {
                id: 90,
                label: 'MENUITEMS.TIMELINE.TEXT',
                icon: 'award',
                subItems: [
                    {
                        id: 91,
                        label: 'MENUITEMS.TIMELINE.LIST.CENTERVIEW',
                        link: '/timeline/center',
                        parentId: 90
                    },
                    {
                        id: 92,
                        label: 'MENUITEMS.TIMELINE.LIST.LEFTVIEW',
                        link: '/timeline/left',
                        parentId: 90
                    },
                    {
                        id: 93,
                        label: 'MENUITEMS.TIMELINE.LIST.HORIZONTALVIEW',
                        link: '/timeline/horizontal',
                        parentId: 90
                    },
                ]
            },
            {
                id: 94,
                label: 'HEADER.AUTHENTICATION.TEXT',
                icon: 'alert-circle',
                subItems: [
                    {
                        id: 95,
                        label: 'HEADER.AUTHENTICATION.LIST.BASIC',
                        subItems: [
                            {
                                id: 96,
                                label: 'HEADER.AUTHENTICATION.LIST.SIGNIN',
                                link: 'account/signin/basic',
                                parentId: 95
                            },
                            {
                                id: 97,
                                label: 'HEADER.AUTHENTICATION.LIST.SIGNUP',
                                link: 'account/signup/basic',
                                parentId: 95
                            },
                            {
                                id: 98,
                                label: 'HEADER.AUTHENTICATION.LIST.SIGNOUT',
                                link: 'account/signout/basic',
                                parentId: 95
                            },
                            {
                                id: 99,
                                label: 'HEADER.AUTHENTICATION.LIST.LOCKSCREEN',
                                link: 'account/lockscreen/basic',
                                parentId: 95
                            },
                            {
                                id: 100,
                                label: 'HEADER.AUTHENTICATION.LIST.FORGOTPASSWORD',
                                link: 'account/forgot-password/basic',
                                parentId: 95
                            },
                            {
                                id: 101,
                                label: 'HEADER.AUTHENTICATION.LIST.RESETPWD',
                                link: 'account/reset-password/basic',
                                parentId: 95
                            },
                            {
                                id: 102,
                                label: 'HEADER.AUTHENTICATION.LIST.EMAILVERIFICATION',
                                link: 'account/email-verification/basic',
                                parentId: 95
                            },
                            {
                                id: 103,
                                label: 'HEADER.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                                link: 'account/twostep-verification/basic',
                                parentId: 95
                            },
                            {
                                id: 104,
                                label: 'HEADER.AUTHENTICATION.LIST.THANKYOU',
                                link: 'account/thankyou/basic',
                                parentId: 95
                            }
                        ]
                    },
                    {
                        id: 106,
                        label: 'HEADER.AUTHENTICATION.LIST.COVER',
                        subItems: [
                            {
                                id: 107,
                                label: 'HEADER.AUTHENTICATION.LIST.SIGNIN',
                                link: 'account/signin/cover',
                                parentId: 106
                            },
                            {
                                id: 108,
                                label: 'HEADER.AUTHENTICATION.LIST.SIGNUP',
                                link: 'account/signup/cover',
                                parentId: 106
                            },
                            {
                                id: 109,
                                label: 'HEADER.AUTHENTICATION.LIST.SIGNOUT',
                                link: 'account/signout/cover',
                                parentId: 106
                            },
                            {
                                id: 110,
                                label: 'HEADER.AUTHENTICATION.LIST.LOCKSCREEN',
                                link: 'account/lockscreen/cover',
                                parentId: 106
                            },
                            {
                                id: 111,
                                label: 'HEADER.AUTHENTICATION.LIST.FORGOTPASSWORD',
                                link: 'account/forgot-password/cover',
                                parentId: 106
                            },
                            {
                                id: 112,
                                label: 'HEADER.AUTHENTICATION.LIST.RESETPWD',
                                link: 'account/reset-password/cover',
                                parentId: 106
                            },
                            {
                                id: 113,
                                label: 'HEADER.AUTHENTICATION.LIST.EMAILVERIFICATION',
                                link: 'account/email-verification/cover',
                                parentId: 106
                            },
                            {
                                id: 114,
                                label: 'HEADER.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                                link: 'account/twostep-verification/cover',
                                parentId: 106
                            },
                            {
                                id: 115,
                                label: 'HEADER.AUTHENTICATION.LIST.THANKYOU',
                                link: 'account/thankyou/cover',
                                parentId: 106
                            }
                        ]
                    }
                ]
            },
            {
                id: 116,
                label: 'HEADER.ERRORSPAGES.TEXT',
                icon: 'alert-circle',
                subItems: [
                    {
                        id: 117,
                        label: 'HEADER.ERRORSPAGES.LIST.400',
                        subItems: [
                            {
                                id: 118,
                                label: 'HEADER.ERRORSPAGES.LIST.BASIC',
                                link: '/pages/404-basic',
                                parentId: 117
                            },
                            {
                                id: 119,
                                label: 'HEADER.ERRORSPAGES.LIST.COVER',
                                link: '/pages/404-cover',
                                parentId: 117
                            }
                        ]
                    },
                    {
                        id: 120,
                        label: 'HEADER.ERRORSPAGES.LIST.500',
                        subItems: [
                            {
                                id: 121,
                                label: 'HEADER.ERRORSPAGES.LIST.BASIC',
                                link: '/pages/500-basic',
                                parentId: 120
                            },
                            {
                                id: 122,
                                label: 'HEADER.ERRORSPAGES.LIST.COVER',
                                link: '/pages/500-cover',
                                parentId: 120
                            }
                        ]
                    },
                ]
            },
            {
                id: 123,
                label: 'MENUITEMS.UTILITY.TEXT',
                icon: 'file-text',
                subItems: [
                    {
                        id: 124,
                        label: 'MENUITEMS.UTILITY.LIST.STARTER',
                        link: '/pages/starter',
                        parentId: 123
                    },
                    {
                        id: 125,
                        label: 'MENUITEMS.UTILITY.LIST.PROFILE',
                        link: '/pages/profile',
                        parentId: 123
                    },
                    {
                        id: 126,
                        label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                        link: '/pages/maintenance',
                        parentId: 123
                    },
                    {
                        id: 127,
                        label: 'MENUITEMS.UTILITY.LIST.COMINGSOON',
                        link: '/pages/comingsoon',
                        parentId: 123
                    },
                    {
                        id: 128,
                        label: 'MENUITEMS.UTILITY.LIST.FAQS',
                        link: '/pages/faqs',
                        parentId: 123
                    }
                ]
            },
        ]
    },
];

