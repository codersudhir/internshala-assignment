import React, { useEffect, useState } from 'react'

const Formeditor = () => {
    const [formName, setFormName] = useState('');
    const [formFields, setFormFields] = useState([]);
    const [selectedField, setSelectedField] = useState(null);
    const [formData, setFormData] = useState([]);
    const [forms, setForms] = useState([]);
  
    useEffect(() => {
      fetch('/api/forms')
        .then((response) => response.json())
        .then((data) => setForms(data));
    }, []);
  
    const handleAddField = (type) => {
      const newField = {
        id: Date.now(),
        type,
        label: '',
      };
      setFormFields([...formFields, newField]);
    };
  
    const handleSaveForm = () => {
      const newForm = {
        name: formName,
        fields: formFields,
      };
  
      fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newForm),
      })
        .then((response) => response.json())
        .then((data) => {
          setForms([...forms, data]);
          setFormName('');
          setFormFields([]);
        });
    };
  
    const handleSelectField = (field) => {
      setSelectedField(field);
    };
    return (
        <div className="App">
          <div className="form-editor bg-gray-100 p-6">
            <h2 className="text-2xl mb-4">Form Editor</h2>
            <div className="form-details mb-4">
              <input
                type="text"
                placeholder="Form Name"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className="w-64 p-2 border rounded"
              />
              <button onClick={handleSaveForm} className="bg-blue-500 text-white p-2 ml-2 rounded">
                Save Form
              </button>
            </div>
            <div className="form-fields mb-4">
              <h3 className="text-xl">Form Fields</h3>
              <button
                onClick={() => handleAddField('text')}
                className="bg-green-500 text-white p-2 rounded"
              >
                Text Field
              </button>
              {/* Add more buttons for other field types */}
            </div>
            <div className="form-preview mb-4">
              <h3 className="text-xl">Form Preview</h3>
              {/* {[].map((field) => (
                <div key={field.id} className="mb-2">
                  <button
                    onClick={() => handleSelectField(field)}
                    className="bg-indigo-500 text-white p-2 rounded"
                  >
                    Edit
                  </button>
                  {field.type === 'text' && (
                    <input
                      type="text"
                      value={field.label}
                      readOnly
                      className="border p-2 rounded"
                    />
                  )}
                 
                </div>
              )} */}
            </div>
          </div>
          <div className="form-data bg-gray-200 p-6">
            <h2 className="text-2xl mb-4">Form Data</h2>
            {/* {[].map((form) => (
              <div key={form.name} className="mb-4">
                <h3 className="text-xl">{form.name}</h3>
                <ul>
                  {form.fields.map((field) => (
                    <li key={field.id}>{field.label}</li>
                  )}
                </ul>
              </div>
            )} */}
          </div>
        </div>
      );
}

export default Formeditor
