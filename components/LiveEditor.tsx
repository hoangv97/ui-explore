import React, { useState, useEffect } from 'react';
import { UIStyleData } from '../types';
import { RefreshCw, Code, Eye, Copy, Check, Maximize, Minimize, Layers, Info, Wand2, Terminal, CheckSquare, Palette } from 'lucide-react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import { STYLE_PROMPTS } from '../constants';

interface LiveEditorProps {
  style: UIStyleData;
  onBack: () => void;
}

const DetailItem = ({ label, value, className = '', icon: Icon }: { label: string; value: string; className?: string; icon?: React.ElementType }) => (
  <div className={`p-3 bg-white rounded-lg border border-gray-100 shadow-sm ${className}`}>
    <div className="flex items-center gap-1.5 mb-1">
        {Icon && <Icon size={12} className="text-blue-500" />}
        <span className="block text-gray-400 text-xs uppercase font-bold tracking-wider">{label}</span>
    </div>
    <p className="font-medium text-gray-900 text-sm leading-relaxed whitespace-pre-line">{value}</p>
  </div>
);

const LiveEditor: React.FC<LiveEditorProps> = ({ style, onBack }) => {
  const [code, setCode] = useState(style.sampleCode || '<!-- No sample code available -->');
  const [copied, setCopied] = useState(false);
  const [promptCopied, setPromptCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  const promptData = STYLE_PROMPTS[style["Style Category"]];

  // Reset code when style changes
  useEffect(() => {
    setCode(style.sampleCode || '<!-- No sample code available -->');
  }, [style]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyPrompt = () => {
    if (promptData?.aiPrompt) {
        navigator.clipboard.writeText(promptData.aiPrompt);
        setPromptCopied(true);
        setTimeout(() => setPromptCopied(false), 2000);
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset code to original sample?')) {
        setCode(style.sampleCode || '');
    }
  };

  const highlightCode = (code: string) => {
    return Prism.highlight(
      code,
      Prism.languages.markup || Prism.languages.html || Prism.languages.xml,
      'html'
    );
  };

  // Escape key to exit full screen
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullScreen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className={`flex flex-col h-[calc(100vh-100px)] transition-all duration-300`}>
      {/* Header */}
      {!isFullScreen && (
        <div className="flex items-center justify-between mb-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div>
             <button onClick={onBack} className="text-sm text-gray-500 hover:text-black mb-1 hover:underline flex items-center gap-1">
              &larr; Back to list
            </button>
            <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-gray-900">{style["Style Category"]} <span className="text-gray-400 font-light ml-2">Playground</span></h2>
                {promptData && (
                    <button 
                        onClick={handleCopyPrompt}
                        className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-xs font-bold hover:shadow-lg hover:scale-105 transition-all"
                        title="Copy AI Generation Prompt"
                    >
                        {promptCopied ? <Check size={12} /> : <Wand2 size={12} />}
                        {promptCopied ? "Prompt Copied!" : "Copy AI Prompt"}
                    </button>
                )}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
             <div className="hidden md:flex bg-gray-100 p-1 rounded-lg mr-4">
                <button 
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'preview' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <Eye size={16} className="inline mr-1.5" /> Preview
                </button>
                <button 
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'code' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <Code size={16} className="inline mr-1.5" /> Code
                </button>
             </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className={`flex-1 grid grid-cols-1 ${!isFullScreen ? 'md:grid-cols-2' : ''} gap-6 overflow-hidden min-h-0`}>
        
        {/* Editor Pane (Hidden on mobile if preview active, or if fullscreen) */}
        {!isFullScreen && (
          <div className={`flex flex-col border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm h-full ${activeTab === 'preview' ? 'hidden md:flex' : 'flex'} animate-in fade-in slide-in-from-left-4 duration-300`}>
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex justify-between items-center flex-shrink-0">
              <span className="text-xs font-mono font-semibold text-gray-500 uppercase flex items-center gap-2">
                <Code size={14} /> HTML / Tailwind
              </span>
              <div className="flex gap-2">
                  <button onClick={handleReset} title="Reset Code" className="p-1.5 text-gray-500 hover:bg-gray-200 rounded transition-colors">
                      <RefreshCw size={14} />
                  </button>
                  <button onClick={handleCopy} title="Copy Code" className="p-1.5 text-gray-500 hover:bg-gray-200 rounded transition-colors">
                      {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                  </button>
              </div>
            </div>
            
            <div className="flex-1 w-full relative overflow-auto bg-gray-50 code-editor-wrapper">
               <Editor
                value={code}
                onValueChange={setCode}
                highlight={highlightCode}
                padding={20}
                className="font-mono text-sm leading-relaxed"
                style={{
                  fontFamily: '"Fira Code", "Fira Mono", monospace',
                  fontSize: 14,
                  backgroundColor: '#f9fafb',
                  minHeight: '100%',
                }}
                textareaClassName="focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Preview Pane (Hidden on mobile if code active) */}
        <div className={`flex flex-col h-full overflow-hidden bg-gray-100 shadow-inner 
            ${!isFullScreen && activeTab === 'code' ? 'hidden md:flex' : 'flex'}
            ${isFullScreen ? 'fixed inset-0 z-[100] border-0 rounded-none animate-in zoom-in-95 duration-200' : 'border border-gray-200 rounded-xl relative transition-all duration-300'}
        `}>
           <div className="bg-white border-b border-gray-200 px-4 py-2 flex justify-between items-center flex-shrink-0">
            <span className="text-xs font-mono font-semibold text-gray-500 uppercase flex items-center gap-2">
              <Eye size={14} /> Live Output
            </span>
            <button 
              onClick={() => setIsFullScreen(!isFullScreen)} 
              className="p-1.5 text-gray-500 hover:bg-gray-200 rounded transition-colors flex items-center gap-2 group"
              title={isFullScreen ? "Exit Full Screen (Esc)" : "Full Screen"}
            >
              {isFullScreen ? (
                <>
                  <span className="text-xs font-medium hidden sm:inline">Exit Full Screen</span>
                  <Minimize size={16} />
                </>
              ) : (
                <>
                  <span className="text-xs font-medium hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">Full Screen</span>
                  <Maximize size={16} />
                </>
              )}
            </button>
          </div>
          
          {/* Render Area */}
          <div className="flex-1 overflow-auto p-4 md:p-8 flex items-center justify-center relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
             <div 
               className={`w-full h-full flex items-center justify-center transition-all duration-300 ${isFullScreen ? 'scale-100' : ''}`}
               dangerouslySetInnerHTML={{ __html: code }} 
             />
          </div>
        </div>
      </div>

      {/* Style Metadata Footer */}
      {!isFullScreen && (
        <div className="mt-6 flex-shrink-0 bg-gray-50 p-6 rounded-xl border border-gray-200 overflow-y-auto max-h-[350px] animate-in fade-in slide-in-from-bottom-4 duration-300 custom-scrollbar">
           <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
              <Info size={18} className="text-blue-600" />
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Style Specifications</h3>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <DetailItem label="Type" value={style.Type} />
              <DetailItem label="Complexity" value={style.Complexity} />
              <DetailItem label="Era/Origin" value={style["Era/Origin"]} />
              <DetailItem label="Performance" value={style.Performance} />
              
              <DetailItem label="Keywords" value={style.Keywords} className="sm:col-span-2 md:col-span-3 lg:col-span-4" />
              
              <DetailItem label="Primary Colors" value={style["Primary Colors"]} className="sm:col-span-2" />
              <DetailItem label="Secondary Colors" value={style["Secondary Colors"]} className="sm:col-span-2" />
              
              <DetailItem label="Effects & Animation" value={style["Effects & Animation"]} className="sm:col-span-2 md:col-span-3 lg:col-span-4" />
              
              <DetailItem label="Best For" value={style["Best For"]} className="sm:col-span-2" />
              <DetailItem label="Do Not Use For" value={style["Do Not Use For"]} className="sm:col-span-2" />
              
              <DetailItem label="Accessibility" value={style.Accessibility} />
              <DetailItem label="Mobile-Friendly" value={style["Mobile-Friendly"]} />
              <DetailItem label="Light Mode" value={style["Light Mode ✓"]} />
              <DetailItem label="Dark Mode" value={style["Dark Mode ✓"]} />
              <DetailItem label="Conversion" value={style["Conversion-Focused"]} />
              <DetailItem label="Frameworks" value={style["Framework Compatibility"]} className="sm:col-span-2" />

              {/* Technical Details from AI Prompts (if available) */}
              {promptData && (
                <>
                    <div className="col-span-full border-t border-gray-200 my-2 pt-4">
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                            <Terminal size={14} className="text-purple-600" /> Technical Implementation
                        </h4>
                    </div>
                    <DetailItem label="CSS Keywords" value={promptData.technicalKeywords} className="sm:col-span-2 md:col-span-4 bg-slate-50 border-slate-200" icon={Code} />
                    <DetailItem label="Implementation Checklist" value={promptData.checklist.replace(/, /g, '\n')} className="sm:col-span-2 md:col-span-2 bg-green-50 border-green-200" icon={CheckSquare} />
                    <DetailItem label="Design Variables" value={promptData.variables.replace(/, /g, '\n')} className="sm:col-span-2 md:col-span-2 bg-blue-50 border-blue-200" icon={Palette} />
                </>
              )}
           </div>
        </div>
      )}
    </div>
  );
};

export default LiveEditor;