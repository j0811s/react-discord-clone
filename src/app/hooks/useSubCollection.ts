import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firbase";

import type { DocumentData, Query, Timestamp } from 'firebase/firestore';
import { useAppSelector } from "@/lib/hooks";

export interface Channel {
  id: string,
  name: DocumentData
}

export interface Messages {
  timestamp: Timestamp,
  message: string,
  user: {
    uid: string,
    photo: string,
    email: string,
    displayName: string
  }
}

const useSubCollection = (collectionName: string, subCollectionName: string) => {
  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);
  const channelId = useAppSelector(state => state.channel.channelId);

  useEffect(() => {
    const collectionRef = collection(db, collectionName, String(channelId), subCollectionName);
    const collectionRefOrderBy = query(collectionRef, orderBy('timestamp', 'asc'));

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      const results: Messages[] = [];

      snapshot.docs.forEach(doc => {
        results.push({
          message: doc.data().message,
          timestamp: doc.data().timestamp,
          user: doc.data().user,
        });
      });

      setSubDocuments(results);
    });
  }, [channelId]);

  return {
    subDocuments
  }
}

export default useSubCollection