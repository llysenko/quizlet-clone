import { getFolders } from '@/features/folders/actions';

export default async function FoldersPage() {
  const folders = await getFolders();

  return (
    <div>
      {folders?.length ? (
        folders.map(folder => <p key={folder.id}>{folder.title}</p>)
      ) : (
        <p className="text-center">You don&apos;t have any folders yet.</p>
      )}
    </div>
  );
}
