'use client';

import React from 'react';

interface VideoSectionProps {
  videoName?: string;
  title?: string;
  description?: string;
}

export const VideoSection = ({ 
  videoName = "Socialmedia",
  title = "Social Media Monitoring ",
  description = "Discover how our platform transforms intelligence gathering and analysis"
}: VideoSectionProps) => {
  const videoPath = `/videos/${videoName}`;

  return (
    <section className=" ">
      <div className=" mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title and Description */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-sans">
              {title}
            </h2>
            <p className="text-lg text-[#F1F1F1]">
              {description}
            </p>
          </div>

          {/* Video Container */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border border-slate-700">
            <video
              controls
              className="w-full h-full bg-black"
              poster={`/videos/${videoName}-poster.jpg`}
            >
              <source src={`${videoPath}.mp4`} type="video/mp4" />
              <source src={`${videoPath}.webm`} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Optional Info below video */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              Video provides a comprehensive overview of our platform capabilities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
