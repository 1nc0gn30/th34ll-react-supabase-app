import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import SignIn from './components/SignIn';
import UserWelcome from './components/UserWelcome';

const JavaScriptLearning = lazy(() => import('./LearningPaths/JavaScriptLearning'));
const CybersecurityLearning = lazy(() => import('./LearningPaths/CyberSecurityLearning'));
const MetaphysicalSpiritualism = lazy(() => import('./LearningPaths/MetaphysicalSpiritualism'));
const PythonLearning = lazy(() => import('./LearningPaths/PythonLearning'));
const ChatRoom = lazy(() => import('./components/ChatRoom'));
const ContactComponent = lazy(() => import('./components/ContactComponent'));
const SubscriptionComponent = lazy(() => import('./components/SubscriptionComponent'));
const ContributionComponent = lazy(() => import('./components/ContributionComponent'));
const StoicPhilosophyComponent = lazy(() => import('./LearningPaths/StoicPhilosophyComponent'));
const ToolsComponent = lazy(() => import('./components/ToolsComponent'));
const EducationComingSoon = lazy(() => import('./components/Educate'));
const MembersPage = lazy(() => import('./components/MembersPage'));
const MatrixYoutubePlayer = lazy(() => import('./components/MatrixYoutubePlayer'));
const DataScienceLearning = lazy(() => import('./LearningPaths/DataScienceLearning'));
const BlockchainLearning = lazy(() => import('./LearningPaths/BlockchainLearning'));

const AppRoutes = ({ session }) => (
  <Suspense fallback={<LoadingScreen />}>
    <Routes>
      {!session ? (
        <Route path="/" element={<SignIn />} />
      ) : (
        <>
          <Route path="/" element={<UserWelcome session={session} />} />
          <Route path="/contact" element={<ContactComponent session={session} />} />
          <Route path="/contribute" element={<ContributionComponent session={session} />} />
          <Route path="/educate" element={<EducationComingSoon session={session} />} />
          <Route path="/studyroom" element={<MatrixYoutubePlayer videoUrl="https://www.youtube.com/watch?v=M5QY2_8704o" session={session} />} />
          <Route path="/subscribe" element={<SubscriptionComponent session={session} />} />
          <Route path="/tools" element={<ToolsComponent session={session} />} />
          <Route path="/chat" element={<ChatRoom session={session} />} />
          <Route path="/members" element={<MembersPage session={session} />} />
          <Route path="/javascript-learning" element={<JavaScriptLearning session={session} />} />
          <Route path="/python-learning" element={<PythonLearning session={session} />} />
          <Route path="/cybersecurity-learning" element={<CybersecurityLearning session={session} />} />
          <Route path="/metaphysical-learning" element={<MetaphysicalSpiritualism session={session} />} />
          <Route path="/stoicism" element={<StoicPhilosophyComponent session={session} />} />
          <Route path="/data-science-learning" element={<DataScienceLearning session={session} />} />
          <Route path="/blockchain-learning" element={<BlockchainLearning session={session} />} />
        </>
      )}
    </Routes>
  </Suspense>
);

export default AppRoutes;
