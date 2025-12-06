'use client';

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X as CloseIcon } from "lucide-react";

export interface HibpDetailsData {
  title: string;
  category: string;
  platform: string;
  statusBadge: {
    label: string;
    className: string;
  };
  recordId?: string | null;
  query?: string | null;
  fields: {
    key: string;
    label: string;
    formattedValue: string;
  }[];
  cardImage?: string | null;
  frontBody: any;
  tags: any[];
  timeline: any;
  records: any[];
}

interface HibpDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: HibpDetailsData | null;
}

export default function HibpDetailsModal({
  isOpen,
  onClose,
  data,
}: HibpDetailsModalProps) {
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

  const body = data.frontBody || {};
  const timeline = data.timeline || {};
  const records = Array.isArray(data.records) ? data.records : [];
  const tags = Array.isArray(data.tags) ? data.tags : [];

  const breachMetaItems = [
    { label: "Domain", value: body.Domain },
    { label: "Breach Date", value: body["Breach Date"] },
    { label: "Added Date", value: body["Added Date"] },
    { label: "Modified Date", value: body["Modified Date"] },
    { label: "Pwn Count", value: body["Pwn Count"] },
  ].filter((item) => typeof item.value !== "undefined" && item.value !== null);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-2 sm:p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="HIBP breach details"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative flex h-full w-full max-w-5xl flex-col rounded-2xl sm:rounded-3xl border border-[#1E2535] bg-gradient-to-b from-[#050814] via-[#020309] to-black shadow-[0_50px_140px_rgba(0,0,0,0.9)] md:h-auto md:max-h-[90vh] overflow-hidden">
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-2 top-2 sm:right-4 sm:top-4 rounded-full border border-[#2D364D] bg-[#0F1524] p-1.5 sm:p-2 text-white transition hover:border-[#167BFF] hover:bg-[#132042] z-10"
        >
          <CloseIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div
          className="hibp-modal-scrollbar flex flex-1 flex-col gap-3 sm:gap-4 md:gap-5 overflow-y-auto overflow-x-hidden p-4 sm:p-6 pt-10 sm:pt-12"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#1E2535 #0A0F19',
          }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            .hibp-modal-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .hibp-modal-scrollbar::-webkit-scrollbar-track {
              background: #0A0F19;
              border-radius: 4px;
            }
            .hibp-modal-scrollbar::-webkit-scrollbar-thumb {
              background: #1E2535;
              border-radius: 4px;
            }
            .hibp-modal-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #2D364D;
            }
          `}} />
          {/* Header */}
          <header className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between pr-8 sm:pr-0">
            <div className="flex-1 min-w-0">
              <p className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#7D879C]">
                {data.category || "Data Breach"}
              </p>
              <h2 className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold text-white break-words">
                {data.title}
              </h2>
              <p className="mt-1 text-[0.7rem] sm:text-xs md:text-sm text-[#9CA3AF]">
                {data.platform}
              </p>
              {data.recordId && (
                <p className="mt-1 text-[0.65rem] sm:text-[0.7rem] text-[#7D879C] break-all">
                  ID: {data.recordId}
                </p>
              )}
              {data.query && (
                <p className="mt-1 text-[0.65rem] sm:text-[0.7rem] text-[#7D879C] break-all">
                  Query: {data.query}
                </p>
              )}
            </div>
            <span
              className={`self-start rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[0.65rem] sm:text-[0.7rem] font-semibold tracking-wide ${data.statusBadge.className}`}
            >
              {data.statusBadge.label}
            </span>
          </header>

          {/* Top block: logo + meta */}
          {(data.cardImage || breachMetaItems.length > 0 || tags.length > 0) && (
            <section className="flex flex-col gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-[#192032] bg-[#050A1A] p-3 sm:p-4">
              {data.cardImage && (
                <div className="relative h-12 w-12 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-full border border-[#27304A] bg-[#020617] self-center sm:self-start">
                  <Image
                    src={data.cardImage}
                    alt={`${data.title} logo`}
                    fill
                    sizes="(max-width: 640px) 48px, 64px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
              <div className="flex-1 space-y-2 sm:space-y-3">
                {breachMetaItems.length > 0 && (
                  <div className="grid grid-cols-1 gap-2 text-xs text-gray-200 sm:grid-cols-2 lg:grid-cols-3">
                    {breachMetaItems.map((item) => (
                      <div key={item.label} className="rounded-lg sm:rounded-xl bg-[#070D1E] p-2.5 sm:p-3">
                        <p className="text-[0.65rem] sm:text-[0.7rem] font-medium text-gray-400">
                          {item.label}
                        </p>
                        <p className="mt-1 text-[0.75rem] sm:text-[0.8rem] break-words">
                          {String(item.value)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {tags.map((tagObj, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-[#2A3A5C] bg-[#050B1C] px-2.5 py-1 sm:px-3 text-[0.65rem] sm:text-[0.7rem] font-medium text-[#C1D0FF]"
                      >
                        {tagObj?.tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Scrollable content */}
          <main className="flex-1 space-y-3 sm:space-y-4">
            {/* Timeline */}
            {Object.keys(timeline).length > 0 && (
              <section className="rounded-xl sm:rounded-2xl border border-[#10243A] bg-[#050E1C] px-3 py-2.5 sm:px-4 sm:py-3 text-[0.7rem] sm:text-[0.75rem] text-[#C0D3FF]">
                <h3 className="mb-2 text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#64748B]">
                  Timeline
                </h3>
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-3">
                  {"registered" in timeline && (
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#22C55E] shrink-0" />
                      <span className="font-semibold text-[0.7rem] sm:text-[0.75rem]">
                        {timeline.registered ? "Registered" : "Not Registered"}
                      </span>
                      {timeline.registered_date && (
                        <span className="ml-1 text-[0.65rem] sm:text-[0.7rem] text-[#9CA3AF] break-words">
                          ({timeline.registered_date})
                        </span>
                      )}
                    </div>
                  )}
                  {"last_seen" in timeline && (
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#F97316] shrink-0" />
                      <span className="font-semibold text-[0.7rem] sm:text-[0.75rem]">
                        {timeline.last_seen ? "Last seen" : "Last seen (approx.)"}
                      </span>
                      {timeline.last_seen_date && (
                        <span className="ml-1 text-[0.65rem] sm:text-[0.7rem] text-[#9CA3AF] break-words">
                          ({timeline.last_seen_date})
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Generic fields from spec_format (already formatted) */}
            {data.fields.length > 0 && (
              <section className="space-y-2 sm:space-y-3">
                <h3 className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#64748B]">
                  Summary
                </h3>
                {data.fields.map((field) => (
                  <div
                    key={field.key}
                    className="rounded-xl sm:rounded-2xl border border-[#141B2C] bg-[#050A18] p-2.5 sm:p-3"
                  >
                    <p className="text-[0.65rem] sm:text-xs font-medium text-gray-400">
                      {field.label}
                    </p>
                    <p className="mt-1 text-[0.8rem] sm:text-[0.85rem] text-gray-100 whitespace-pre-wrap break-words">
                      {field.formattedValue}
                    </p>
                  </div>
                ))}
              </section>
            )}

            {/* Detailed breached records */}
            {records.length > 0 && (
              <section className="space-y-2 sm:space-y-3">
                <h3 className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#64748B]">
                  Breach records
                </h3>
                {records.map((entry, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl sm:rounded-2xl border border-[#1E293B] bg-[#020617] p-2.5 sm:p-3 text-[0.75rem] sm:text-[0.8rem] text-gray-200 space-y-1 sm:space-y-1.5"
                  >
                    {entry.name?.value && (
                      <div className="break-words">
                        <span className="text-gray-400 font-medium">Name: </span>
                        <span>{entry.name.value}</span>
                      </div>
                    )}
                    {entry.website?.value && (
                      <div className="break-words">
                        <span className="text-gray-400 font-medium">
                          Website:{" "}
                        </span>
                        <span>{entry.website.value}</span>
                      </div>
                    )}
                    {entry.bio?.value && (
                      <div className="break-words">
                        <span className="text-gray-400 font-medium">Bio: </span>
                        <span>{entry.bio.value}</span>
                      </div>
                    )}
                    {entry.creation_date?.value && (
                      <div className="break-words">
                        <span className="text-gray-400 font-medium">
                          Creation Date:{" "}
                        </span>
                        <span>{entry.creation_date.value}</span>
                      </div>
                    )}

                    {Array.isArray(entry.platform_variables) &&
                      entry.platform_variables.length > 0 && (
                        <div className="mt-1 space-y-0.5">
                          {entry.platform_variables.map(
                            (pv: any, pvIdx: number) => (
                              <div key={pvIdx} className="break-words">
                                <span className="text-gray-400 font-medium">
                                  {(pv.proper_key || pv.key || "").toString()}
                                  {": "}
                                </span>
                                <span>
                                  {Array.isArray(pv.value)
                                    ? pv.value.join(", ")
                                    : pv.value === null ||
                                      typeof pv.value === "undefined"
                                    ? "Not available"
                                    : pv.value.toString()}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      )}
                  </div>
                ))}
              </section>
            )}
          </main>

          {/* Optional footer for external links */}
          {body.Domain && (
            <footer className="mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 pt-2 text-[0.7rem] sm:text-[0.75rem]">
              <p className="text-[#9CA3AF] flex-1">
                Data sourced from {data.platform}. Treat with caution.
              </p>
              <Link
                href={
                  body.Domain.startsWith("http")
                    ? body.Domain
                    : `https://${body.Domain}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#167BFF] bg-[#0C448C] px-3 py-1.5 sm:px-4 text-[0.65rem] sm:text-[0.7rem] font-semibold text-white transition hover:bg-[#167BFF] w-full sm:w-auto"
              >
                Visit breach site
              </Link>
            </footer>
          )}
        </div>
      </div>
    </div>
  );
}

