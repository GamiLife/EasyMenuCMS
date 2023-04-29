export const getImage = (imageUrl: string) =>
  imageUrl
    ? [
        {
          id: 1,
          url: imageUrl,
        },
      ]
    : [];
