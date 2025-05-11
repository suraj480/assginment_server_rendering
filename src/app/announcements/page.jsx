//CSR
"use client";
import { useEffect, useState } from "react";
import { getAnnouncements } from "../lib/getAnnoucements";
import AnnouncementPanel from "../components/AnnoucementPannel";
export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    getAnnouncements().then(setAnnouncements);
  }, []);
  return <AnnouncementPanel announcements={announcements} />;
}
