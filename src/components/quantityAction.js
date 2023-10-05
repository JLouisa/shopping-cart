const quantityAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData();
  const submission = {
    id: data.get("id"),
    quantity: data.get("quantityNum"),
  };
  console.log(submission);
  return null;
};

export default quantityAction;
