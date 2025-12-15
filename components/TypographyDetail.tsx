import React, { useState } from 'react';
import { TypographyData } from '../types';
import { ArrowLeft, Type, Copy, Check, ExternalLink, Code } from 'lucide-react';
import Prism from 'prismjs';
import Editor from 'react-simple-code-editor';

interface TypographyDetailProps {
  data: TypographyData;
  onBack: () => void;
}

const CopyButton = ({ text, label = "" }: { text: string, label?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-indigo-600 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
      {label && (copied ? "Copied!" : label)}
    </button>
  );
};

const TypographyDetail: React.FC<TypographyDetailProps> = ({ data, onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <style dangerouslySetInnerHTML={{ __html: data["CSS Import"] }} />
      
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={16} className="mr-1" /> Back to Typography
      </button>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm text-indigo-600">
               <Type size={28} />
            </div>
            <div>
               <h1 className="text-3xl font-bold text-gray-900">{data["Font Pairing Name"]}</h1>
               <div className="flex items-center gap-3 mt-1">
                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {data.Category}
                 </span>
                 <a 
                   href={data["Google Fonts URL"]} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-xs font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1 hover:underline"
                 >
                   View on Google Fonts <ExternalLink size={10} />
                 </a>
               </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {data["Mood/Style Keywords"].split(',').map((keyword, i) => (
              <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-sm">
                #{keyword.trim()}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Visual Preview */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Heading Specimen</span>
                <span className="text-xs font-mono text-gray-500">{data["Heading Font"]}</span>
              </div>
              <h1 className="text-5xl md:text-7xl text-gray-900 leading-tight mb-2" style={{ fontFamily: data["Heading Font"] }}>
                Visual Elegance
              </h1>
              <h2 className="text-3xl md:text-4xl text-gray-800 leading-tight" style={{ fontFamily: data["Heading Font"] }}>
                The quick brown fox jumps over the lazy dog.
              </h2>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Body Specimen</span>
                <span className="text-xs font-mono text-gray-500">{data["Body Font"]}</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: data["Body Font"] }}>
                Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing (leading), and letter-spacing (tracking), and adjusting the space between pairs of letters (kerning).
              </p>
              <p className="text-base text-gray-600 leading-relaxed" style={{ fontFamily: data["Body Font"] }}>
                <strong>ABCDEFGHIJKLMNOPQRSTUVWXYZ</strong><br/>
                abcdefghijklmnopqrstuvwxyz<br/>
                1234567890 !@#$%^&*()_+
              </p>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-8 h-fit">
            
            <div>
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-3">
                <Code size={16} className="text-indigo-500" /> Implementation
              </h3>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase">CSS Import</span>
                  <CopyButton text={data["CSS Import"]} label="Copy" />
                </div>
                <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                  <code className="text-xs font-mono text-gray-300 block whitespace-pre-wrap break-all">
                    {data["CSS Import"]}
                  </code>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Tailwind Config</span>
                  <CopyButton text={data["Tailwind Config"]} label="Copy" />
                </div>
                <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                  <code className="text-xs font-mono text-blue-300 block whitespace-pre-wrap break-all">
                    {data["Tailwind Config"]}
                  </code>
                </div>
              </div>
            </div>

            <div>
               <h3 className="text-sm font-bold text-gray-900 mb-3">Best For</h3>
               <p className="text-sm text-gray-600 leading-relaxed bg-white p-3 rounded border border-gray-200">
                 {data["Best For"]}
               </p>
            </div>

            <div>
               <h3 className="text-sm font-bold text-gray-900 mb-3">Designer Notes</h3>
               <p className="text-sm text-gray-600 leading-relaxed italic bg-amber-50 p-3 rounded border border-amber-100 text-amber-900">
                 "{data.Notes}"
               </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyDetail;