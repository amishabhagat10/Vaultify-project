export function getDocs() {
  try {
    const raw = localStorage.getItem("vaultifyDocuments");
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function getDoc(id) {
  const list = getDocs();
  return list.find((d) => d.id === id) || null;
}

function uuid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `doc_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
}

export function saveDoc({ title, description, fileName, fileType, dataUrl }) {
  const doc = {
    id: uuid(),
    title: String(title || "Untitled").trim(),
    description: String(description || "").trim(),
    fileName: String(fileName || "").trim(),
    fileType: String(fileType || "").trim(),
    dataUrl: dataUrl || "",
    createdAt: Date.now(),
  };
  try {
    const list = getDocs();
    const next = [doc, ...list];
    localStorage.setItem("vaultifyDocuments", JSON.stringify(next));
  } catch {}
  return doc;
}
