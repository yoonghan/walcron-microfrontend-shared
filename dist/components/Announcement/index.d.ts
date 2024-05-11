import { ReactNode } from "react";
export type AnnouncementsType = (string | ReactNode)[];
export default function Announcement({ ariaAnnouncementTitle, announcements, classes, }: {
    ariaAnnouncementTitle: string;
    announcements: AnnouncementsType;
    classes?: string;
}): import("react/jsx-runtime").JSX.Element | null;
