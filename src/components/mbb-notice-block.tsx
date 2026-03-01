"use client";
import { useState } from "react";
import { cn } from "../utils/cn";

interface NoticeItem {
  id: string;
  title: string;
  description?: string;
  time: string;
  read: boolean;
  onClick?: () => void;
}

interface MbbNoticeBlockProps {
  officialNotices?: NoticeItem[];
  personalNotices?: NoticeItem[];
  className?: string;
}

function MbbNoticeBlock({ officialNotices = [], personalNotices = [], className }: MbbNoticeBlockProps) {
  const [activeTab, setActiveTab] = useState<"official" | "personal">("official");
  const notices = activeTab === "official" ? officialNotices : personalNotices;

  return (
    <div className={cn("rounded-card bg-white shadow-card overflow-hidden w-[360px]", className)}>
      <div className="tab-underline-container flex gap-0 px-4 pt-2">
        <button className={cn("tab-underline", activeTab === "official" && "active")} onClick={() => setActiveTab("official")}>
          官方公告
        </button>
        <button className={cn("tab-underline", activeTab === "personal" && "active")} onClick={() => setActiveTab("personal")}>
          個人通知
        </button>
      </div>
      <div className="notice-divider" />
      <div className="max-h-[300px] overflow-y-auto">
        {notices.length === 0 && (
          <div className="p-6 text-center text-sm text-[var(--text-describe)]">目前沒有通知</div>
        )}
        {notices.map((item) => (
          <div key={item.id}>
            <div
              className={cn("notice-item relative px-4 py-3", !item.read && "notice-unread", item.read && "notice-readed")}
              onClick={item.onClick}
            >
              <p className={cn("text-sm font-bold ellipsis-2-line", item.read ? "text-[var(--text-describe)]" : "text-[var(--text-content)]", !item.read && "pl-4")}>
                {item.title}
              </p>
              {item.description && (
                <p className={cn("text-sm mt-1 ellipsis-2-line", item.read ? "text-[var(--text-describe)]" : "text-[var(--text-subcontent)]", !item.read && "pl-4")}>
                  {item.description}
                </p>
              )}
              <p className={cn("text-sm mt-1", "text-[var(--text-describe)]", !item.read && "pl-4")}>{item.time}</p>
            </div>
            <div className="notice-divider" />
          </div>
        ))}
      </div>
    </div>
  );
}

export { MbbNoticeBlock };
