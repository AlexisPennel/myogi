import React from "react";
import Loader from "./components/Loader/Loader";

export const metadata = {
    title: 'Myogi | Chargement en cours...',
};

export default function Loading() {
    return <Loader />;
}