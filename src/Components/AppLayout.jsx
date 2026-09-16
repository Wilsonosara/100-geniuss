import { useEffect, useState } from "react";
import Footer from "./Footer";
import CommunityJoinModal from "./CommunityModal";

export default function AppLayout({ header, children }) {
  const [showCommunityModal, setShowCommunityModal] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowCommunityModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {header}

      <main className="flex-1">
        {children}
      </main>

      <Footer />

      <CommunityJoinModal
        open={showCommunityModal}
        onClose={()=> setShowCommunityModal(false)}
      />
    </div>
  );
}