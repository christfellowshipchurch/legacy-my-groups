---
name: Groups-Only Deletable Plan Update
overview: Actionable execution plan to trim the app to Groups, Login, Connect, Home, and Profile. Keeps Profile (pages + components), Video, WistiaPlayer, AddToCalendarModal, and all FeatureFeed-related code. Ordered steps with exact paths for Claude Code to execute.
todos: []
isProject: false
---

# Groups-Only Cleanup: Actionable Execution Plan

Scope: Trim the app to Groups, Login, Connect, Home, Profile, and supporting routes. **Keep**: Profile (page + components), Video, WistiaPlayer, AddToCalendarModal, all FeatureFeed components, `useFeatureFeed` hook, and `FeatureFeedProvider`. **Do not** simplify Connect/Home (delete the old “Optional” section 4).

---

## Phase 1: Delete page routes

Delete these **pages** (files and directories). Do **not** delete: `_app.js`, `_document.js`, `404.js`, `index.js`, `login/`, `connect/`, `home.js`, `profile.js`, `groups/`, `group/`, `privacy-policy.js`, `terms-of-use.js`, `error/`, `release-consent.js`, or `api/`.

Execute in order (path relative to repo root):

1. Delete directory [pages/about/](pages/about/)
2. Delete directory [pages/channels/](pages/channels/)
3. Delete directory [pages/christmas/](pages/christmas/)
4. Delete directory [pages/conference-2025-report/](pages/conference-2025-report/)
5. Delete directory [pages/content/](pages/content/)
6. Delete directory [pages/devotionals/](pages/devotionals/)
7. Delete directory [pages/discover/](pages/discover/)
8. Delete directory [pages/easter/](pages/easter/)
9. Delete directory [pages/easter-2024-old/](pages/easter-2024-old/)
10. Delete directory [pages/easter-espanol/](pages/easter-espanol/)
11. Delete directory [pages/easter-jam/](pages/easter-jam/)
12. Delete directory [pages/events/](pages/events/)
13. Delete file [pages/external-home.js](pages/external-home.js)
14. Delete directory [pages/give/](pages/give/)
15. Delete directory [pages/get-there-first/](pages/get-there-first/)
16. Delete directory [pages/heart-for-the-house/](pages/heart-for-the-house/)
17. Delete file [pages/icons-rendering.js](pages/icons-rendering.js)
18. Delete directory [pages/items/](pages/items/)
19. Delete directory [pages/keep-talking/](pages/keep-talking/)
20. Delete directory [pages/link-tree/](pages/link-tree/)
21. Delete directory [pages/live/](pages/live/)
22. Delete directory [pages/locations/](pages/locations/)
23. Delete directory [pages/marriage/](pages/marriage/)
24. Delete directory [pages/messages/](pages/messages/)
25. Delete directory [pages/next-steps/](pages/next-steps/)
26. Delete directory [pages/one-life/](pages/one-life/)
27. Delete directory [pages/so-good-sisterhood/](pages/so-good-sisterhood/)
28. Delete directory [pages/studies/](pages/studies/)
29. Delete directory [pages/years-of-impact/](pages/years-of-impact/)
30. Delete directory [pages/2023-christ-birthday-offering/](pages/2023-christ-birthday-offering/)
31. Delete directory [pages/2024-christ-birthday-offering/](pages/2024-christ-birthday-offering/)
32. Delete file [pages/[title].js](pages/[title].js)

---

## Phase 2: Update index page

1. Edit [pages/index.js](pages/index.js): replace the current implementation (ExternalLandingPage) with a redirect to `/groups` (or `/login` if unauthenticated). Preserve any `getStaticProps`/data needs only if still required; otherwise a client-side redirect in `useEffect` or a Next.js `redirect` in `getServerSideProps` is sufficient.

---

## Phase 3: Delete components (do not delete Profile, Video, WistiaPlayer, or FeatureFeed-related)

Delete these **component directories** under `components/`. **Do not** delete: UserProfile, ClientSideComponent, Video, WistiaPlayer, or any FeatureFeed-related components (FeatureFeed, ActionBarFeature, ActionListFeature, AvatarListFeature, ContentBlockFeature, ContentBlockCollection, HeroListFeature, HorizontalCardListFeature, VerticalCardListFeature), or Layout, Header, Footer, SEO, JsonLD, AppHead, MobileNavScreen, Nav, Logo, NotFound, PasswordReset, CustomLink, SearchField, ContentLayout, Community*, Group*, GroupsList, AddToCalendar, Chat, BirthDateField, GenderField, ActionBanner, GenericError.

1. Delete directory [components/ActionBanner/](components/ActionBanner/) (optional; only if you want to remove the header banner)
2. Delete directory [components/EasterContentBlock/](components/EasterContentBlock/)
3. Delete directory [components/EasterHero/](components/EasterHero/)
4. Delete directory [components/EasterLocationSearch/](components/EasterLocationSearch/)
5. Delete directory [components/EasterWordCarousel/](components/EasterWordCarousel/)
6. Delete directory [components/EventSingle/](components/EventSingle/)
7. Delete directory [components/EventsList/](components/EventsList/)
8. Delete directory [components/ExternalHome/](components/ExternalHome/)
9. Delete directory [components/GiveWithPushpay/](components/GiveWithPushpay/)
10. Delete directory [components/GiveComponents/](components/GiveComponents/)
11. Delete directory [components/HeartForHouseComponents/](components/HeartForHouseComponents/)
12. Delete directory [components/DiscoverFilterSection/](components/DiscoverFilterSection/)
13. Delete directory [components/DiscoverFiltersMap/](components/DiscoverFiltersMap/)
14. Delete directory [components/DiscoverItemsList/](components/DiscoverItemsList/)
15. Delete directory [components/HeroLanding/](components/HeroLanding/)
16. Delete directory [components/HeroFeature/](components/HeroFeature/)
17. Delete directory [components/LegacyNodeRouter/](components/LegacyNodeRouter/)
18. Delete directory [components/LiveStreamSingle/](components/LiveStreamSingle/)
19. Delete directory [components/LocationBlockFeature/](components/LocationBlockFeature/)
20. Delete directory [components/LocationBlockFeatureEspanol/](components/LocationBlockFeatureEspanol/)
21. Delete directory [components/LocationSearch/](components/LocationSearch/)
22. Delete directory [components/LocationSingle/](components/LocationSingle/)
23. Delete directory [components/GetThereFirstComponents/](components/GetThereFirstComponents/) (if present)
24. Delete directory [components/MarriageSlide/](components/MarriageSlide/) (if present)
25. Delete directory [components/PageSingle/](components/PageSingle/)
26. Delete directory [components/ContentSingle/](components/ContentSingle/)
27. Delete directory [components/ContentList/](components/ContentList/)
28. Delete directory [components/Testimonials/](components/Testimonials/)
29. Delete directory [components/VideoHeader/](components/VideoHeader/)
30. Delete directory [components/VisionCardCarousel/](components/VisionCardCarousel/)
31. Delete directory [components/DisplayAllIcons/](components/DisplayAllIcons/)
32. Delete directory [components/TrackEventWhenLoaded/](components/TrackEventWhenLoaded/)
33. Delete directory [components/CollectionPreview/](components/CollectionPreview/)
34. Delete directory [components/CardGridFeature/](components/CardGridFeature/)
35. Delete directory [components/EmblaCarousel/](components/EmblaCarousel/)
36. Delete directory [components/FilterField/](components/FilterField/)
37. Delete directory [components/InfoCardList/](components/InfoCardList/)
38. Delete directory [components/LottieViewer/](components/LottieViewer/)
39. Delete directory [components/PhotoCarousel/](components/PhotoCarousel/)
40. Delete directory [components/Share/](components/Share/)
41. Delete directory [components/Tabs/](components/Tabs/)
42. Delete directory [components/GradientBackground/](components/GradientBackground/)
43. Delete directory [components/FAQ/](components/FAQ/)
44. Delete directory [components/HomeFeed/](components/HomeFeed/)
45. Delete directory [components/Component/](components/Component/) (only if no remaining code imports from it)

---

## Phase 4: Remove modal components and config entries

Delete these modal **component directories** and remove their entries from [config/modals.js](config/modals.js). **Do not** delete: AuthModal, AddGroupMemberModal, GroupDetailsModal, GroupEmailConfirmationModal, GroupFilterModal, GroupMemberDetailsModal, GroupNotifyMeModal, NavMenuModal, or AddToCalendarModal.

1. Delete directory [components/Modals/ConnectCardModal/](components/Modals/ConnectCardModal/)
2. Delete directory [components/Modals/ConnectModal/](components/Modals/ConnectModal/)
3. Delete directory [components/Modals/EasterLocationsModal/](components/Modals/EasterLocationsModal/)
4. Delete directory [components/Modals/NodeSingleModal/](components/Modals/NodeSingleModal/)
5. Delete directory [components/Modals/SetReminderModal/](components/Modals/SetReminderModal/)
6. Delete directory [components/Modals/VideoModal/](components/Modals/VideoModal/)
7. Delete directory [components/Modals/WelcomeModal/](components/Modals/WelcomeModal/)
8. Edit [components/Modals/index.js](components/Modals/index.js): remove exports and imports for ConnectCardModal, ConnectModal, EasterLocationsModal, NodeSingleModal, SetReminderModal, VideoModal, WelcomeModal.
9. Edit [config/modals.js](config/modals.js): remove array entries for ConnectCardModal, ConnectModal, EasterLocations, NodeSingle, SetReminder, Video, Welcome (keep AddToCalendarModal and all Group/Auth/Nav modals).

---

## Phase 5: Update components/index.js

1. Edit [components/index.js](components/index.js): remove imports and exports for every deleted component (all from Phase 3 and Phase 4). Do **not** remove: UserProfile, ClientSideComponent, Video, WistiaPlayer, FeatureFeed, ActionBarFeature, ActionListFeature, AvatarListFeature, ContentBlockFeature, ContentBlockCollection, HeroListFeature, HorizontalCardListFeature, VerticalCardListFeature, or any Group/Community/Layout/Modal components that were kept.

---

## Phase 6: Hooks, providers, config, and cleanup

1. **Hooks:** Remove hooks used only by deleted pages/features (e.g. discover, events, locations, give, easter, live, marriage). Keep [hooks/useFeatureFeed.js](hooks/useFeatureFeed.js) and its export in [hooks/index.js](hooks/index.js). Keep all group-related and profile-related hooks.
2. **Providers:** Remove providers used only by deleted features (e.g. LiveStreamProvider, CampusesProvider, ContentItemProvider for non-profile flows, DiscoverFiltersProvider, EventProvider). Keep FeatureFeedProvider, CurrentPersonProvider, AuthProvider, ModalProvider, GroupFiltersProvider, GroupProvider, GroupsProvider, CommunitiesProvider, UserProfileProvider.
3. **Config:** Edit [config/mobile-nav-links.js](config/mobile-nav-links.js) and [config/new-nav-links.js](config/new-nav-links.js) so navigation only includes routes you kept: `/groups`, `/connect`, `/login`, `/home`, `/profile`, and any other retained pages.
4. **Utils/lib:** Remove or trim utils and lib files that are only referenced by deleted components or pages.
5. **GraphQL:** Remove queries/mutations used exclusively by deleted features; keep group-related and profile-related API usage.

---

## Verification

- Ensure [pages/profile.js](pages/profile.js), [components/UserProfile/](components/UserProfile/), and [components/ClientSideComponent/](components/ClientSideComponent/) remain.
- Ensure [components/Video/](components/Video/), [components/WistiaPlayer/](components/WistiaPlayer/), and [components/Modals/AddToCalendarModal/](components/Modals/AddToCalendarModal/) remain, and AddToCalendarModal stays in [config/modals.js](config/modals.js).
- Ensure [hooks/useFeatureFeed.js](hooks/useFeatureFeed.js), [providers/FeatureFeedProvider.js](providers/FeatureFeedProvider.js), and all FeatureFeed feature components (ActionBarFeature, ActionListFeature, AvatarListFeature, ContentBlockFeature, ContentBlockCollection, HeroListFeature, HorizontalCardListFeature, VerticalCardListFeature) remain.
- Run `npm run build` (or `next build`) and fix any broken imports or missing exports after deletions.
