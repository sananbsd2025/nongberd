import React from 'react';

interface File {
  name: string;
  link: string;
}

interface News {
  _id: string;
  title: string;
  description: string;
  files: File[];
  photo: string;
  createdAt: string;
}

async function fetchNews(): Promise<News[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  const res = await fetch(`${baseUrl}/api/news`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch news');
  }

  const data = await res.json();
  return data.data;
}

export default async function NewsListPage() {
  const newsList = await fetchNews();

  return (
    <div className="container mx-auto p-4">
      <h1 className="rounded text-xl font-bold mb-6 bg-blue-600 p-2 mx-auto 
      flex justify-center text-white">ข่าวประชาสัมพันธ์</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {newsList.map((news) => (
          <div
            key={news._id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <div className="relative max-w-xs overflow-hidden rounded-lg bg-cover bg-no-repeat">
            <img
              src={news.photo}
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
              width={300}
            />
          </div>
            <p className="text-gray-600 mb-4">{news.description}</p>
            <div>
              <ul className="list-disc list-inside">
                {news.files.map((file, index) => (
                  <li key={index}>
                    <a
                      href={file.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {file.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
