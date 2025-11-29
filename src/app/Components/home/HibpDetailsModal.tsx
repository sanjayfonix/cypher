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
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="HIBP breach details"
    >
      <div className="relative flex h-full w-full max-w-5xl flex-col rounded-3xl border border-[#1E2535] bg-gradient-to-b from-[#050814] via-[#020309] to-black p-6 shadow-[0_50px_140px_rgba(0,0,0,0.9)] md:h-auto md:max-h-[90vh]">
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 rounded-full border border-[#2D364D] bg-[#0F1524] p-2 text-white transition hover:border-[#167BFF] hover:bg-[#132042]"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="flex flex-1 flex-col gap-5 overflow-hidden pt-4 md:pt-6">
          {/* Header */}
          <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#7D879C]">
                {data.category || "Data Breach"}
              </p>
              <h2 className="mt-1 text-xl sm:text-2xl font-semibold text-white">
                {data.title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#9CA3AF]">
                {data.platform}
              </p>
              {data.recordId && (
                <p className="mt-1 text-[0.7rem] text-[#7D879C]">
                  ID: {data.recordId}
                </p>
              )}
              {data.query && (
                <p className="mt-1 text-[0.7rem] text-[#7D879C] break-all">
                  Query: {data.query}
                </p>
              )}
            </div>
            <span
              className={`self-start rounded-full px-4 py-2 text-[0.7rem] font-semibold tracking-wide ${data.statusBadge.className}`}
            >
              {data.statusBadge.label}
            </span>
          </header>

          {/* Top block: logo + meta */}
          {(data.cardImage || breachMetaItems.length > 0 || tags.length > 0) && (
            <section className="flex flex-col gap-4 rounded-2xl border border-[#192032] bg-[#050A1A] p-4 sm:flex-row sm:items-center">
              {data.cardImage && (
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[#27304A] bg-[#020617]">
                  <Image
                    src={data.cardImage}
                    alt={`${data.title} logo`}
                    fill
                    sizes="64px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
              <div className="flex-1 space-y-3">
                {breachMetaItems.length > 0 && (
                  <div className="grid grid-cols-1 gap-2 text-xs text-gray-200 sm:grid-cols-2 md:grid-cols-3">
                    {breachMetaItems.map((item) => (
                      <div key={item.label} className="rounded-xl bg-[#070D1E] p-3">
                        <p className="text-[0.7rem] font-medium text-gray-400">
                          {item.label}
                        </p>
                        <p className="mt-1 text-[0.8rem]">
                          {String(item.value)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tagObj, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-[#2A3A5C] bg-[#050B1C] px-3 py-1 text-[0.7rem] font-medium text-[#C1D0FF]"
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
          <main className="flex-1 space-y-4 overflow-y-auto pr-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1E2535]">
            {/* Timeline */}
            {Object.keys(timeline).length > 0 && (
              <section className="rounded-2xl border border-[#10243A] bg-[#050E1C] px-4 py-3 text-[0.75rem] text-[#C0D3FF]">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#64748B]">
                  Timeline
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  {"registered" in timeline && (
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
                      <span className="font-semibold">
                        {timeline.registered ? "Registered" : "Not Registered"}
                      </span>
                      {timeline.registered_date && (
                        <span className="ml-1 text-[#9CA3AF]">
                          ({timeline.registered_date})
                        </span>
                      )}
                    </div>
                  )}
                  {"last_seen" in timeline && (
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-[#F97316]" />
                      <span className="font-semibold">
                        {timeline.last_seen ? "Last seen" : "Last seen (approx.)"}
                      </span>
                      {timeline.last_seen_date && (
                        <span className="ml-1 text-[#9CA3AF]">
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
              <section className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#64748B]">
                  Summary
                </h3>
                {data.fields.map((field) => (
                  <div
                    key={field.key}
                    className="rounded-2xl border border-[#141B2C] bg-[#050A18] p-3"
                  >
                    <p className="text-xs font-medium text-gray-400">
                      {field.label}
                    </p>
                    <p className="mt-1 text-[0.85rem] text-gray-100 whitespace-pre-wrap break-words">
                      {field.formattedValue}
                    </p>
                  </div>
                ))}
              </section>
            )}

            {/* Detailed breached records */}
            {records.length > 0 && (
              <section className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#64748B]">
                  Breach records
                </h3>
                {records.map((entry, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#1E293B] bg-[#020617] p-3 text-[0.8rem] text-gray-200 space-y-1.5"
                  >
                    {entry.name?.value && (
                      <div>
                        <span className="text-gray-400 font-medium">Name: </span>
                        <span>{entry.name.value}</span>
                      </div>
                    )}
                    {entry.website?.value && (
                      <div>
                        <span className="text-gray-400 font-medium">
                          Website:{" "}
                        </span>
                        <span>{entry.website.value}</span>
                      </div>
                    )}
                    {entry.bio?.value && (
                      <div>
                        <span className="text-gray-400 font-medium">Bio: </span>
                        <span>{entry.bio.value}</span>
                      </div>
                    )}
                    {entry.creation_date?.value && (
                      <div>
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
                              <div key={pvIdx}>
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
            <footer className="mt-2 flex items-center justify-between gap-3 pt-2 text-[0.75rem]">
              <p className="text-[#9CA3AF]">
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
                className="inline-flex items-center justify-center rounded-full border border-[#167BFF] bg-[#0C448C] px-4 py-1.5 text-[0.7rem] font-semibold text-white transition hover:bg-[#167BFF]"
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

