  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/verify-certificate?certificateNo=${encodeURIComponent(certificateNo)}`);
      if (res.ok) {
        const json = await res.json();
        setResult({
          valid: true,
          certificateNo: json.data.certificateNo,
          gemstoneType: json.data.gemstoneType,
          gemstoneTypeHi: json.data.gemstoneType,
          origin: json.data.origin,
          originHi: json.data.origin,
          caratWeight: json.data.caratWeight,
          rattiWeight: json.data.rattiWeight,
          isNatural: json.data.isNatural,
          treatmentStatus: json.data.treatmentStatus || 'Natural Untreated',
          treatmentStatusHi: json.data.treatmentStatus || 'प्राकृतिक अनुपचारित',
          certifiedBy: json.data.certifiedBy,
          certifiedByHi: json.data.certifiedBy
        });
      } else {
        setResult({ valid: false });
      }
    } catch (err) {
      setResult({ valid: false });
    } finally {
      setLoading(false);
    }
  };
