import DefaultModal from 'ui-kit/Modal';
import {
  AddGroupMemberModal,
  AddToCalendarModal,
  AuthModal,
  GroupDetailsModal,
  GroupEmailConfirmationModal,
  GroupFilterModal,
  GroupMemberDetailsModal,
  GroupNotifyMeModal,
  NavMenuModal,
} from 'components/Modals';

const modals = [
  {
    title: 'Default',
    component: DefaultModal,
  },
  {
    title: 'AddGroupMember',
    component: AddGroupMemberModal,
  },
  {
    title: 'AddToCalendar',
    component: AddToCalendarModal,
  },
  {
    title: 'Auth',
    component: AuthModal,
  },
  {
    title: 'GroupDetails',
    component: GroupDetailsModal,
  },
  {
    title: 'GroupEmailConfirmation',
    component: GroupEmailConfirmationModal,
  },
  {
    title: 'GroupFilter',
    component: GroupFilterModal,
  },
  {
    title: 'GroupMemberDetails',
    component: GroupMemberDetailsModal,
  },
  {
    title: 'GroupNotifyMe',
    component: GroupNotifyMeModal,
  },
  {
    title: 'NavMenu',
    component: NavMenuModal,
  },
];

export default modals;
