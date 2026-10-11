/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WorkspaceProvider } from './context/WorkspaceContext';
import { Sidebar, ActiveTab } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { DashboardView } from './components/DashboardView';
import { DailyStudyView } from './components/DailyStudyView';
import { RoadmapView } from './components/RoadmapView';
import { HabitTrackerView } from './components/HabitTrackerView';
import { SubjectsHubView } from './components/SubjectsHubView';
import { FiveYearPyqView } from './components/FiveYearPyqView';
import { MistakeTrackerView } from './components/MistakeTrackerView';
import { AiDependencyControlView } from './components/AiDependencyControlView';
import { ProjectsAndQuestsView } from './components/ProjectsAndQuestsView';
import { CsExplorationView } from './components/CsExplorationView';
import { DeepWorkTimer } from './components/DeepWorkTimer';
import { NotionArchitectureView } from './components/NotionArchitectureView';
import { ExportModal } from './components/ExportModal';
import { SubjectCode } from './types';

function WorkspaceLayout() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [selectedSubject, setSelectedSubject] = useState<SubjectCode>('CSC165');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f1012] text-[#ededed] flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        onOpenExport={() => setIsExportModalOpen(true)}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="lg:pl-64 flex-1 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onOpenExport={() => setIsExportModalOpen(true)}
        />

        {/* View Switcher Container */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {activeTab === 'dashboard' && (
            <DashboardView
              setActiveTab={setActiveTab}
              setSelectedSubject={setSelectedSubject}
            />
          )}

          {activeTab === 'daily-study' && <DailyStudyView />}

          {activeTab === 'roadmap' && (
            <RoadmapView
              setActiveTab={setActiveTab}
              setSelectedSubject={setSelectedSubject}
            />
          )}

          {activeTab === 'habits' && <HabitTrackerView />}

          {activeTab === 'subjects' && (
            <SubjectsHubView
              selectedSubject={selectedSubject}
              setSelectedSubject={setSelectedSubject}
            />
          )}

          {activeTab === 'pyq-bank' && <FiveYearPyqView />}

          {activeTab === 'mistakes' && <MistakeTrackerView />}

          {activeTab === 'ai-control' && <AiDependencyControlView />}

          {activeTab === 'projects-quests' && <ProjectsAndQuestsView />}

          {activeTab === 'cs-exploration' && <CsExplorationView />}

          {activeTab === 'timer' && <DeepWorkTimer />}

          {activeTab === 'notion-arch' && <NotionArchitectureView />}
        </main>
      </div>

      {/* Export & Backup Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <WorkspaceProvider>
      <WorkspaceLayout />
    </WorkspaceProvider>
  );
}
