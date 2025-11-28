'use client';

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X as CloseIcon } from "lucide-react";

export interface ResultField {
  key: string;
  label: string;
  formattedValue: string;
}

export interface ResultDetailsData {
  title: string;
  category: string;
  platform: string;
  statusBadge: {
    label: string;
    className: string;
  };
  recordId?: string | null;
  query?: string | null;
  profileUrl?: string | null;
  reliableSource?: boolean;
  fields: ResultField[];
  cardImage?: string | null;
}

interface ResultDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ResultDetailsData | null;
}

export default function ResultDetailsModal({ isOpen, onClose, data }: ResultDetailsModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Result details"
    >
      <div className="relative w-full max-w-4xl rounded-3xl border border-[#1E2535] bg-gradient-to-b from-[#0D111C] via-[#0A0F19] to-[#06070C] p-6 shadow-[0_45px_120px_rgba(0,0,0,0.85)]">
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 rounded-full border border-[#2D364D] bg-[#0F1524] p-2 text-white transition hover:border-[#167BFF] hover:bg-[#132042]"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#7D879C]">{data.category}</p>
              <h2 className="text-2xl font-semibold text-white">{data.title}</h2>
              <p className="text-sm text-[#9CA3AF]">{data.platform}</p>
              {data.recordId && (
                <p className="mt-1 text-xs text-[#7D879C]">ID: {data.recordId}</p>
              )}
              {data.query && (
                <p className="mt-1 text-xs text-[#7D879C] break-all">Query: {data.query}</p>
              )}
            </div>
            <span className={`self-start rounded-full px-4 py-2 text-xs font-semibold tracking-wide ${data.statusBadge.className}`}>
              {data.statusBadge.label}
            </span>
          </div>

          {(data.cardImage || data.profileUrl) && (
            <div className="flex flex-col gap-4 rounded-2xl border border-[#192032] bg-[#0F1524] p-4 sm:flex-row sm:items-center">
              {data.cardImage && (
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-[#27304A] bg-[#0B0F1A]">
                  <Image
                    src={data.cardImage}
                    alt={`${data.title} profile image`}
                    fill
                    sizes="96px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
              {data.profileUrl && (
                <Link
                  href={data.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#167BFF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0C448C]"
                >
                  Visit Profile
                </Link>
              )}
            </div>
          )}

          <div className="max-h-[60vh] space-y-4 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1E2535]">
            {data.fields.map((field) => (
              <div key={field.key} className="rounded-2xl border border-[#141B2C] bg-[#0C1323] p-4">
                <p className="text-sm font-medium text-gray-400">{field.label}</p>
                <p className="mt-1 text-base text-gray-100 whitespace-pre-wrap break-words">{field.formattedValue}</p>
              </div>
            ))}
          </div>

          {data.reliableSource && (
            <div className="rounded-2xl border border-[#10243A] bg-[#0B1624] px-4 py-3 text-xs text-[#69B3FF]">
              <span className="font-semibold tracking-wide">✓ Reliable Source</span>
              <span className="ml-2 text-[#7D879C]">Verified by Webutation</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
