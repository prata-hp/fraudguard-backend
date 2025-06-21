import re

def extract_features(url):
    return {
        'url_length': len(url),
        'has_ip': 1 if re.match(r'\d+\.\d+\.\d+\.\d+', url) else 0,
        'count_dots': url.count('.'),
        'has_https': 1 if 'https' in url else 0,
        'count_hyphens': url.count('-'),
        'has_at': 1 if '@' in url else 0,
        'has_suspicious_words': 1 if any(word in url for word in ['login', 'verify', 'update', 'free', 'click']) else 0
    }
