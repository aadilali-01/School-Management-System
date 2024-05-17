import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// My Routes for School Management System
const AllTeachers = React.lazy(() => import('./views/teachers/allTeachers'))
const AddNewTeacher = React.lazy(() => import('./views/teachers/addTeacher') )

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home', isProtected: true },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard , isProtected: true },
  { path: '/theme', name: 'Theme', element: Colors, exact: true , isProtected: true },
  { path: '/theme/colors', name: 'Colors', element: Colors , isProtected: true },
  { path: '/theme/typography', name: 'Typography', element: Typography , isProtected: true },
  { path: '/base', name: 'Base', element: Cards, exact: true , isProtected: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion , isProtected: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs , isProtected: true },
  { path: '/base/cards', name: 'Cards', element: Cards , isProtected: true },
  { path: '/base/carousels', name: 'Carousel', element: Carousels , isProtected: true },
  { path: '/base/collapses', name: 'Collapse', element: Collapses , isProtected: true },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups , isProtected: true },
  { path: '/base/navs', name: 'Navs', element: Navs , isProtected: true },
  { path: '/base/paginations', name: 'Paginations', element: Paginations , isProtected: true },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders , isProtected: true },
  { path: '/base/popovers', name: 'Popovers', element: Popovers , isProtected: true },
  { path: '/base/progress', name: 'Progress', element: Progress , isProtected: true },
  { path: '/base/spinners', name: 'Spinners', element: Spinners , isProtected: true },
  { path: '/base/tables', name: 'Tables', element: Tables , isProtected: true },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips , isProtected: true },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true , isProtected: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons , isProtected: true },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns , isProtected: true },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups , isProtected: true },
  { path: '/charts', name: 'Charts', element: Charts , isProtected: true },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true , isProtected: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl , isProtected: true },
  { path: '/forms/select', name: 'Select', element: Select , isProtected: true },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios , isProtected: true },
  { path: '/forms/range', name: 'Range', element: Range , isProtected: true },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup , isProtected: true },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels , isProtected: true },
  { path: '/forms/layout', name: 'Layout', element: Layout , isProtected: true },
  { path: '/forms/validation', name: 'Validation', element: Validation , isProtected: true },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons , isProtected: true },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons , isProtected: true },
  { path: '/icons/flags', name: 'Flags', element: Flags , isProtected: true },
  { path: '/icons/brands', name: 'Brands', element: Brands , isProtected: true },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true , isProtected: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts , isProtected: true },
  { path: '/notifications/badges', name: 'Badges', element: Badges , isProtected: true },
  { path: '/notifications/modals', name: 'Modals', element: Modals , isProtected: true },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts , isProtected: true },
  { path: '/widgets', name: 'Widgets', element: Widgets , isProtected: true },

  //My Routes for School Management System
  { path: '/teachers', name: 'Teachers', element: AllTeachers, exact: true , isProtected: true },
  { path: '/teachers/all-teachers', name: 'All Teachers', element: AllTeachers , isProtected: true },
  { path: '/teachers/add-new-teacher', name: 'Add New Teacher', element: AddNewTeacher , isProtected: true },
]

export default routes
