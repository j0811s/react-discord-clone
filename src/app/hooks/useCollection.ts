import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firbase";

import type { DocumentData, Query } from 'firebase/firestore';
export interface Channel {
  id: string,
  name: DocumentData
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channel[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelResults: Channel[] = [];

      querySnapshot.forEach((doc) => {
        channelResults.push({
          id: doc.id,
          name: doc.data().channelName
        });
      });
      
      setDocuments(channelResults)
    });
  }, []);

  return {
    documents
  }
}

export default useCollection